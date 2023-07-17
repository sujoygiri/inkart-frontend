import { Component } from '@angular/core';

import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host:{
    '(window:click)':'onClickOutside()'
  }
})
export class NavbarComponent {
  showMainMenu: boolean = false;
  showProfileMenu:boolean = false
  
  constructor(protected globalService:GlobalService) {}

  toggleMenu() {
    this.showMainMenu = !this.showMainMenu;
  }

  toggleProfileMenu($event: any){
    $event.stopPropagation();   
    this.showProfileMenu = !this.showProfileMenu;
  }

  onClickOutside(){
    this.showProfileMenu = false;
  }

}
