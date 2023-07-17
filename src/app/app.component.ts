import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './services/auth.service';
import { GlobalService } from './global.service';
import { ServerAuthResponse } from './types/auth-data.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'inkart';
  sessionSubscription!: Subscription;

  constructor(
    private globalService: GlobalService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.sessionSubscription = this.authService.authenticate().subscribe({
      next: (response: ServerAuthResponse) => {
        if(response.status === 'success'){
          this.globalService.isLoggedIn = true;
          this.globalService.profilePic = response.profile_pic
          this.globalService.userName = response.userName;
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.sessionSubscription){
      this.sessionSubscription.unsubscribe();
    }
  }
}
