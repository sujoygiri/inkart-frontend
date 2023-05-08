import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { LoginData } from './model/auth-data-model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url:string = "http://localhost:3000/api/auth/login"

  constructor(private http:HttpClient) { }

  login(data:LoginData){
    return this.http.post(this.url,{email:data.email,password:data.password},{withCredentials:true})
  }
}
