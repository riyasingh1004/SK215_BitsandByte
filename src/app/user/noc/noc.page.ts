import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PoliceService } from '../../police/police.service';


@Component({
  selector: 'app-noc',
  templateUrl: './noc.page.html',
  styleUrls: ['./noc.page.scss'],
})
export class NocPage implements OnInit {


  constructor(private loading: LoadingController,private router: Router,private policeservice:PoliceService) { }
  isLoading = false;

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
      const phone = form.value.phoneno;
      const complaint = form.value.request;
      const title = form.value.title;
    console.log("sumbit");
    this.policeservice.addUsers(title,pin,username,phone,address,complaint);
    this.isLoading = true;
    this.loading
      .create({ keyboardClose: true, message: 'Submitting Request ...'})
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
