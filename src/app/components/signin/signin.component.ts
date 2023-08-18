import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class SigninComponent implements OnInit, OnDestroy {

  loginForm!:FormGroup;
  loginSubscription!: Subscription;

  constructor(
    private fromBuilder:FormBuilder,
    private globalService: GlobalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}/)]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(50),Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/)]]
    })
  }

  login() {
    if(this.loginForm.invalid){
      return;
    }
    let userData:LoginData = this.loginForm.value;
    this.loginSubscription = this.authService.login(userData).subscribe({
      next: (response: ServerAuthResponse) => {
        if(response.status === 'success'){
          this.globalService.isLoggedIn = true;
          this.globalService.profilePic = response.profile_pic
          this.globalService.userName = response.userName;
        }
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this.globalService.showSigninNeededModal = false;
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    if(this.loginSubscription){
      this.loginSubscription.unsubscribe();
    }
  }
}
