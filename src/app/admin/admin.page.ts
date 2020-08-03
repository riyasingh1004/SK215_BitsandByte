import { Component, OnInit, OnDestroy } from '@angular/core';
import { Admin } from './admin.model';
import { AdminService } from './admin.service';
import { Subscription } from 'rxjs';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit, OnDestroy {
 loadedpolice: Admin[];
 private policesub: Subscription;

  constructor(private adminservice: AdminService,private loadingCtrl: LoadingController,private router:Router) { }

  ngOnInit() {
   this.policesub = this.adminservice.police.subscribe( police => {
      this.loadedpolice = police
    });

  }

  onDeletepolice(policeId: string, slidingEl: IonItemSliding){
     slidingEl.close();
     this.loadingCtrl.create({message: 'Deleting...'}).then(loadingEl =>{
       loadingEl.present();
       this.adminservice.deletepolice(policeId).subscribe(() =>{
          this.router.navigateByUrl("admin");
         loadingEl.dismiss();
       });
     });

  }

  ngOnDestroy(){
    if(this.policesub){
      this.policesub.unsubscribe();
    }
  }  

}

