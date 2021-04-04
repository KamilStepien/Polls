import {  Component } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  isHideMenu:boolean = true
  constructor(){
  }

  hideMenu()
  {
    this.isHideMenu = !this.isHideMenu;
    console.log(this.isHideMenu);
  }
}
