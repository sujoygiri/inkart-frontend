import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url:string = "http://localhost:3000/api/v1/"

  constructor(private http:HttpClient) { }

  login(){
    return this.http.post()
  }
}
