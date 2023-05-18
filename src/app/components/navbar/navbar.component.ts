import { Component } from '@angular/core';

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
  
  constructor() {}

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
