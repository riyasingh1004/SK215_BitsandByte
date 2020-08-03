import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PoliceService } from '../../police/police.service';

@Component({
  selector: 'app-fir',
  templateUrl: './fir.page.html',
  styleUrls: ['./fir.page.scss'],
})
export class FirPage implements OnInit {
  isLoading = false;

  constructor(private loading: LoadingController,private router: Router,private policeservice:PoliceService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    if(!form.valid){
      return;
    }
      const username = form.value.username;
      const pin = form.value.pin;
      const address = form.value.address;
      const phone = form.value.phone;
      const complaint = form.value.complaint;
      const title = form.value.title;
    console.log("sumbit");
    this.policeservice.addUsers(title,pin,username,phone,address,complaint);
    this.isLoading = true;
    this.loading
      .create({ keyboardClose: true, message: 'Submitting complaint ...'})
      .then(loadingEl=> {
       loadingEl.present();
       setTimeout(()=>{
         this.router.navigateByUrl("user");
      this.isLoading = false;
      loadingEl.dismiss();
    }, 1500);
  });
  }

}
