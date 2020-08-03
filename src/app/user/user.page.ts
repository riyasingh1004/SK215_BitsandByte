import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController,private router:Router) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Queries',
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'FIR Complaint',
        icon: 'sad',
        handler: () => {
          this.router.navigateByUrl("user/fir");
        }
      }, {
        text: 'NOC Request',
        icon: 'share',
        handler: () => {
          this.router.navigateByUrl("user/noc");
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
