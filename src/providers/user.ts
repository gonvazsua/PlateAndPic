import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserProvider {

  loggedUser  : User;

  constructor(public http: HttpClient) {
    this.loggedUser = null;
  }

  setUser(user) {
    this.loggedUser = user;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

}
