import { Component, OnInit, OnDestroy } from '@angular/core';
import { Info } from 'src/app/police/info.model';
import { Subscription } from 'rxjs';
import { PoliceService } from 'src/app/police/police.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit, OnDestroy {
loadedInfo: Info[];
private infosub: Subscription;
  constructor(private policeservice: PoliceService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.infosub = this.policeservice.info.subscribe( info => {
      this.loadedInfo = info
    });

  }

 async showApproval(){
    const alert = await this.alertCtrl.create({  
      header: 'Alert',    
      message: 'Your Request has been Approved',  
      buttons: ['Dismiss']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
  }

  async showDisaproval(){
    const alert = await this.alertCtrl.create({  
      header: 'Alert',    
      message: 'Your Request has been Rejected',  
      buttons: ['Dismiss']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
  }

  ngOnDestroy(){
    if(this.infosub){
      this.infosub.unsubscribe();
    }
  }  

}
