import { Component, OnInit } from '@angular/core';
import {LoginAuthenticationService} from '../service/login-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginAuthenticationService: LoginAuthenticationService) { }

  ngOnInit() {
    this.loginAuthenticationService.logout();
  }

}
