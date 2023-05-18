import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GlobalService } from 'src/app/global.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData, ServerAuthResponse } from 'src/app/types/auth-data.type';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnDestroy {
  loginSubscription!: Subscription;

  constructor(
    private globalService: GlobalService,
    private authService: AuthService,
    private router: Router
  ) {}

  login(data: LoginData) {
    this.loginSubscription = this.authService.login(data).subscribe({
      next: (result: ServerAuthResponse) => {
        if(result.status === 'success'){
          this.globalService.isLoggedIn = true;
          this.globalService.userName = result.userName;
        }
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy() {
    if(this.loginSubscription){
      this.loginSubscription.unsubscribe();
    }
      
  }
}
