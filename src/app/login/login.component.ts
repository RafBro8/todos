import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginAuthenticationService} from '../service/login-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user1';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private loginAuthenticationService: LoginAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // if (this.username === 'user1' && this.password === 'password') {
    // logic moved to LoginAuthenticationService

    if (this.loginAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
