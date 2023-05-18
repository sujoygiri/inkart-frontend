import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { LoginData, ServerAuthResponse } from '../types/auth-data.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://localhost:3000/api/auth/"

  constructor(private http:HttpClient) { }

  login(data:LoginData):Observable<ServerAuthResponse>{
    return this.http.post<ServerAuthResponse>(this.url + 'login',{email:data.email,password:data.password},{withCredentials:true})
  }

  authenticate(){
    return this.http.post<ServerAuthResponse>(this.url + 'authenticate',{},{withCredentials:true})
  }
}
