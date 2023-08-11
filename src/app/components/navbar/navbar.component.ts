import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from 'src/app/global.service';
import { AuthService } from 'src/app/services/auth.service';
import { LogoutResponse } from 'src/app/types/auth-data.type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host:{
    '(window:click)':'onClickOutsideProfileMenu()'
  }
})
export class NavbarComponent {
  showMainMenu: boolean = false;
  showProfileMenu:boolean = false
  
  constructor(
    protected globalService:GlobalService, 
    private authService:AuthService,
    private router:Router
  ) {}

  toggleMenu() {
    this.showMainMenu = !this.showMainMenu;
  }

  toggleProfileMenu($event: any){
    $event.stopPropagation();   
    this.showProfileMenu = !this.showProfileMenu;
  }

  onClickOutsideProfileMenu(){
    this.showProfileMenu = false;
  }

  onClickYourProfile(){
    this.router.navigate([`user/${this.globalService.userName.replaceAll(' ','')}`])
  }

  onLogOut(){
    this.authService.logout().subscribe({
      next:(response:LogoutResponse) => {
        if(response.success){
          this.globalService.isLoggedIn = false
        }
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {
        this.router.navigate(['/'])
      }
    })
  }

}
