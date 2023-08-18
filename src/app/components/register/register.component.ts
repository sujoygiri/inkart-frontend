import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GlobalService } from 'src/app/global.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterData, ServerAuthResponse } from 'src/app/types/auth-data.type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm!:FormGroup;
  registrationSubscription!:Subscription;

  constructor(
    private fromBuilder:FormBuilder,
    private globalService:GlobalService,
    private authService:AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fromBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9]+[\-]{0,1}[a-zA-Z0-9]+$/)]],
      email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}/)]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(50),Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/)]]
    })
  }

  register(){
    if(this.registerForm.invalid){
      return;
    }
    let userData:RegisterData = this.registerForm.value;
    this.registrationSubscription = this.authService.register(userData).subscribe({
      next:(response:ServerAuthResponse)=>{
        if(response.status === 'success'){
          this.globalService.userName = response.userName;
          this.globalService.profilePic = response.profile_pic
          this.globalService.isLoggedIn = true;
        }
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        this.globalService.showSigninNeededModal = false;
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy(){
    if(this.registrationSubscription){
      this.registrationSubscription.unsubscribe();
    }
  }
}