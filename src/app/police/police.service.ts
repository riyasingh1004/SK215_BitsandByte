import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Police } from './police.model';
import { Info } from './info.model';
import { take, map ,tap, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {
  private _users = new BehaviorSubject<Police[]>([]);
  private _info = new BehaviorSubject<Info[]>([])
  
  get users()
  {
    return this._users.asObservable();
  }
  constructor() { }

  getuser(userId: string)
  {
    return this.users.pipe(take(1), map(user=> {
      return {...user.find(p => p.userid === userId)}; 
    })
    );
  }

  getuserpin(userpin: string)
  {
    return this.users.pipe(take(1), map(user=> {
      return {...user.find(p => p.pin === userpin)}; 
    })
    );
  }

  

  addUsers(title: string,pin: string,name: string,phoneNumber: number,address: string,complaint: string) {
    const newUser = new Police(
      Math.random().toString(),title,pin,name,phoneNumber,address,complaint);
    return this._users.pipe(take(1)).subscribe( user =>{
      this._users.next(user.concat(newUser));
    } );
     
    
  }

  get info()
  {
    return this._info.asObservable();
  }

  addinfo(report: string,resource: string) {
    const newInfo = new Info(
      Math.random().toString(),report,resource);
    return this._info.pipe(take(1)).subscribe( user =>{
      this._info.next(user.concat(newInfo));
    } );
     
    
  }

  deleteuser(userId: string)
  { 
     return this.users.pipe(
       take(1),
       delay(1000),
       tap(user => {
         this._users.next(user.filter(p => p.userid!== userId));
       })
     );
  }
  
}
