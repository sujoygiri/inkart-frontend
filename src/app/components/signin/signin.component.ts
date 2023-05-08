import { Component } from '@angular/core';
import {Subscription} from 'rxjs'

import { GlobalService } from 'src/app/global.service';
import { LoginData } from 'src/app/model/auth-data-model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginSubscription!:Subscription;
  constructor(private globalService:GlobalService) {}
  login(data:LoginData){
    this.loginSubscription = this.globalService.login(data).subscribe({
      next: (result:any) => {
        console.log(result);
      },
      error: (error:any) => {
        console.log(error);
      },
      complete: () => {
        console.log("complete");
      }
    })

  }

}
