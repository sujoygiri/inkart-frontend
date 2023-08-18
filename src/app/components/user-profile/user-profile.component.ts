import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

interface ResponseType {
  userDetails: {
    username: string;
    profilePic: string;
  };
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userName: string = '';
  activeTab: string = 'overview';
  userProfilePic: string = '';
  
  constructor(
    private actiavtedRoute: ActivatedRoute, 
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.actiavtedRoute.params.subscribe({
      next: (value) => {
        this.userName = value['username'];
        this.getProfileOverview();
      }
    });
  }

  getProfileOverview() {
    this.userService.profileOverview(this.userName).subscribe({
      next: (response: ResponseType) => {
        console.log(response);
        this.userName = response.userDetails.username;
        this.userProfilePic = 'http://localhost:8080/uploads/user_profile_pic/' + response.userDetails.profilePic;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Request complete!');
      }
    });
  }

  onClickOverview(clickedTab: string) {
    switch (clickedTab) {
      case 'overview':
        this.getProfileOverview();
        break;

      default:
        break;
    }
  }
}
