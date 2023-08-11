import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  userName: string = 'Guest';
  isLoggedIn: boolean = false;
  showSigninNeededModal:boolean = false;
  profilePic:string = '';
}
