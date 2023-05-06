import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuNav:boolean = false;


  showMenu(){
    this.menuNav = !this.menuNav;
  }
}
