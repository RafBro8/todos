import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('before auth', this.isUserLoggedIn());
    if (username === 'user1' && password === 'password') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after auth', this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');

  }
}
