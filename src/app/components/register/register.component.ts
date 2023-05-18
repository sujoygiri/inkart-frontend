import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(
    private fromBuilder:FormBuilder,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fromBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
      retype_password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]]
    })
  }

  register(){
    console.log(this.registerForm);
    // this.http.post('http://
  }
}