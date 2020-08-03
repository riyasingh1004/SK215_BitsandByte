import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.page.html',
  styleUrls: ['./admin-details.page.scss'],
})
export class AdminDetailsPage implements OnInit, OnDestroy {
  loadedpolice: Admin;
  private policesub: Subscription;

  constructor(private route: ActivatedRoute,private adminservice:AdminService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('policeId')){
        return;
      }
     this.policesub = this.adminservice.getpolice(paramMap.get('policeId')).subscribe(police =>{
        this.loadedpolice = police;
     });
    });
  }
  ngOnDestroy(){
    if(this.policesub){
      this.policesub.unsubscribe();
    }
  }

}
