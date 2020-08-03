import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-police',
  templateUrl: './add-police.page.html',
  styleUrls: ['./add-police.page.scss'],
})
export class AddPolicePage implements OnInit {
  isLoading = false;

  constructor(private router:Router,private loading:LoadingController, private adminservice:AdminService) { }

  ngOnInit() {
  }

  
  onSubmit(form: NgForm)
  {
      if(!form.valid){
        return;
      }
      const name = form.value.name;
      const userid = form.value.userid;
      const password = form.value.password;
      const address = form.value.address;
      const phone = form.value.phoneno;
      const blooddgroup = form.value.bloodgroup;
      const gender = form.value.gender;
      console.log(name,userid,password,address,phone,blooddgroup,gender);
      this.adminservice.addpolice(userid,password,name,phone,address,blooddgroup,gender);
      this.isLoading = true;
      this.loading
      .create({ keyboardClose: true, message: 'Saving data ...'})
      .then(loadingEl=> {
       loadingEl.present();
       setTimeout(()=>{
        this.router.navigateByUrl("admin");
      this.isLoading = false;
      loadingEl.dismiss();
    }, 1500);
  });
  }

}
