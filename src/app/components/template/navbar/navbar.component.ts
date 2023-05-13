import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuNav: boolean = false;


  showMenu() {
    this.menuNav = !this.menuNav;
  }

  onMouseLeave(){
    this.menuNav = !this.menuNav;
  }
/*   onTouchLeave(event:any){
    const menu = document.querySelector('.navbar-nav'); // selecione o elemento do menu
    if (menu && !menu.contains(event.target as Node)) { // verifique se o toque foi liberado fora do menu
      this.menuNav = false; // oculte o menu
    }
  } */
}
