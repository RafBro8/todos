import { Component, OnInit } from '@angular/core';
import {LoginAuthenticationService} from '../service/login-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn = false;

  constructor(private loginAuthenticationService: LoginAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.loginAuthenticationService.isUserLoggedIn();
  }

}
