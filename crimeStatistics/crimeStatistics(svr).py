# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('crime.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values

"""from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)"""

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
sc_y = StandardScaler()
X = sc_X.fit_transform(X)
y = np.squeeze(sc_y.fit_transform(y.reshape(-1, 1)))



#Fitting the SVR to the dataset
from sklearn.svm import SVR
regressor = SVR(kernel='rbf')
regressor.fit(X, y)


#Predicting a new result with Polynomial regression
y_pred = sc_y.inverse_transform(regressor.predict(sc_X.transform(np.array([[2019]]))))


# Visualising the svr results (for higher resolution and smoother curve)
X_grid = np.arange(min(X), max(X), 0.1)
X_grid = X_grid.reshape((len(X_grid), 1))
plt.scatter(X, y, color = 'red')
plt.plot(X_grid, regressor.predict(X_grid), color = 'blue')
plt.title('Year vs Crime_Registered (Linear Regression)')
plt.xlabel('Year')
plt.ylabel('Crime_Registered')
plt.show()

