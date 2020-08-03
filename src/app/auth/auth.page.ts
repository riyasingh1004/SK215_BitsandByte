import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AdminService } from '../admin/admin.service';
import { Subscription } from 'rxjs';
import { Admin } from '../admin/admin.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading=false;
  loadedpolice: Admin;
  private policesub: Subscription;
  constructor(private router: Router, private loading:LoadingController,
    private route: ActivatedRoute,private adminservice :AdminService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('policePassword')){
        return;
      }
     this.policesub = this.adminservice.getpassword(paramMap.get('policePassword')).subscribe(police =>{
        this.loadedpolice = police;
     });
    });
  }

  openUserHome()
  {
    this.isLoading = true;
    this.loading
      .create({ keyboardClose: true,})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('user');
        }, 1500);
      });
  }
   
  
  onSubmit(form: NgForm)
  {  
      if(!form.valid){
        return;
      }
      const userid = form.value.userid;
      const password = form.value.password;
      console.log(userid,password);
      this.isLoading = true;
      this.loading
      .create({ keyboardClose: true, message: 'Logging in ...'})
      .then(loadingEl=> {
       loadingEl.present();
       setTimeout(()=>{
        if(userid=="myadmin" && password=="riyasingh"){
          this.router.navigateByUrl("admin");
         }
        else
        {
        this.router.navigateByUrl(password);
        }
      this.isLoading = false;
      loadingEl.dismiss();
    }, 1500);
  });
  }

 
}
