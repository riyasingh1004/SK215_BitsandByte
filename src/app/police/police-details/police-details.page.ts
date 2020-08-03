import { Component, OnInit, OnDestroy } from '@angular/core';
import { Police } from '../police.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliceService } from '../police.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-police-details',
  templateUrl: './police-details.page.html',
  styleUrls: ['./police-details.page.scss'],
})
export class PoliceDetailsPage implements OnInit, OnDestroy {
  loadeduser: Police;
  private usersub: Subscription;
  isLoading=false;

  constructor(private route: ActivatedRoute,private policeservice: PoliceService, private loading: LoadingController, 
    private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('userId')){
        return;
      }
      this.usersub = this.policeservice.getuser(paramMap.get('userId')).subscribe(user =>{
        this.loadeduser = user;
      });
    });
  }

  async SaveInfo(){
    this.isLoading = true;
    this.loading
      .create({ keyboardClose: true, message: "Saving info..."})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
        }, 1500);
      });

      const alert = await this.alertCtrl.create({  
        header: 'Notification',  
        message: 'Your complaint/request has been lodged',  
        buttons: ['Dismiss']  
      });  
      await alert.present();  
      const result = await alert.onDidDismiss();  
    }  

  
    onSubmit(form: NgForm)
  {
      const report = form.value.add;
      const resource = form.value.resource;
    console.log("sumbit");
    this.policeservice.addinfo(report,resource);
    this.isLoading = true;
    this.loading
      .create({ keyboardClose: true, message: 'Sending request...'})
      .then(loadingEl=> {
       loadingEl.present();
       setTimeout(()=>{
      this.isLoading = false;
      loadingEl.dismiss();
    }, 1500);
  });
  }





  

  ngOnDestroy(){
    if(this.usersub){
      this.usersub.unsubscribe();
    }
  }

}
