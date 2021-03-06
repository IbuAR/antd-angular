import { Injectable } from '@angular/core';
import { GetpostService } from './getpost.service';
import { Constants } from '../shared/constants/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private getpost: GetpostService,
    private router: Router) { }

  getToken() {
    return localStorage.getItem('user');
  }

  LoggedIn() {
    const result = this.getToken();
    return (result && JSON.parse(result).isLoggedIn === 'active' ? true : false);
  }

  Logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  Login(val) {
    return this.getpost.postMethod(Constants.url + Constants.login, val)
  }

  SignUp(val) {
    return this.getpost.postMethod(Constants.url + Constants.login, val)
  }
}
