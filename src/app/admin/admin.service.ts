import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { BehaviorSubject } from 'rxjs';
import { take, map ,tap, delay} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _police = new BehaviorSubject<Admin[]>([
      new Admin(
        'p1001',
        '560082',
        'Ajay Kumar',
        9445588001,
        'Jk Nagar, Main road, Agra, 560082',
        '560082',
        'Male'
        ),
        new Admin(
          'p1002',
          '827012',
          'Mohit Chawla',
          4362991238,
          'Sagar Conolny , MG Road, Delhi,827012',
          '827012',
          'Male'
          ),

          new Admin(
            'p1003',
            '651249',
            'Neha Singh',
            8893938001,
            'Salt Lake, Kolkata,651249',
            '651249',
            'Female'
            )
  ]);

  get police(){
     return this._police.asObservable();
  }
  constructor() { }

  getpassword(password: string)
  {
    return this.police.pipe(take(1), map(police=> {
      return{...police.find(p => p.policepassword === password)}; 
    })
    );
  }

  getpolice(policeId: string)
  {
    return this.police.pipe(take(1), map(police=> {
      return{...police.find(p => p.policeid === policeId)}; 
    })
    );
    }

    addpolice(policeid: string,policepassword: string, name: string, phone: number,residence: string, bloodgroup: string, gender: string)
    {
         const newpolice = new Admin(policeid,policepassword,name,phone,residence,bloodgroup,gender);

         this._police.pipe(take(1)).subscribe( police =>{
          this._police.next(police.concat(newpolice));
         });
        
    } 

    deletepolice(policeId: string)
    { 
       return this.police.pipe(
         take(1),
         delay(1000),
         tap(police => {
           this._police.next(police.filter(p => p.policeid !== policeId));
         })
       );
    }
  }


