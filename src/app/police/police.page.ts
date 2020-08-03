import { Component, OnInit,OnDestroy } from '@angular/core';
import { Police } from './police.model'
import { Subscription } from 'rxjs';
import { PoliceService } from './police.service';
import { AdminService } from '../admin/admin.service';
import { Admin } from '../admin/admin.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IonItemSliding, LoadingController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-police',
  templateUrl: './police.page.html',
  styleUrls: ['./police.page.scss'],
})
export class PolicePage implements OnInit,OnDestroy {
  loadedusers: Police[];
  private usersub: Subscription;
  private policesub: Subscription;
  loadedpolice: Admin;
  constructor(private policeservice:PoliceService,
    private adminservice: AdminService,
    private route: ActivatedRoute,
     private loadingCtrl: LoadingController,
     private router: Router,
     private alertCtrl: AlertController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('policePassword')){
        return;
      }
     this.policesub = this.adminservice.getpassword(paramMap.get('policePassword')).subscribe(police =>{
        this.loadedpolice = police;
     });
    });
    
    this.usersub = this.policeservice.users.subscribe(users => {
      this.loadedusers = users;
    });

   
  }
   async onDeleteUser(userId: string, slidingEl: IonItemSliding){
      slidingEl.close();
      this.loadingCtrl.create({message: 'Deleting...'}).then(loadingEl =>{
        loadingEl.present();
        this.policeservice.deleteuser(userId).subscribe(() =>{
          this.router.navigateByUrl(this.loadedpolice.policepassword);
          loadingEl.dismiss();
        });
      });

      const alert = await this.alertCtrl.create({  
        header: 'Notification',  
        message: 'Your complaint/request has been rejected',  
        buttons: ['Dismiss']  
      });  
      await alert.present();  
      const result = await alert.onDidDismiss();  
    }

    ngOnDestroy(){
      if(this.usersub){
        this.usersub.unsubscribe();
      }
    }

}

