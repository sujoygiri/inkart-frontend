import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:8080/api/user/';

  constructor(private http:HttpClient) { }

  profileOverview(username:string):Observable<any>{
    return this.http.get(this.url + username,{withCredentials:true})
  }
}
