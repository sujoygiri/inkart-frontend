import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(
    private fromBuilder:FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fromBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,20}$/)]],
      retype_password:['',[Validators.required,this.isTwoPasswordMatched.bind(this)]],
    })
  }

  isTwoPasswordMatched(formControl:FormControl){
    if(formControl.value !== this.registerForm?.value?.password){
      return {isTwoPasswordMatched:'Password did not matched'}
    }
    return null;
  }

  register(){
    if(this.registerForm.invalid){
      return;
    }
    console.log(this.registerForm);
    // this.http.post('http://
  }
}