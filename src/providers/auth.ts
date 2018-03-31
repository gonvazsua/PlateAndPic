import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { urls } from '../urls';
import { User} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
  }

  emailAuthentication(email, password) : Observable<any> {
    const parsed = {email : email, password : password };
    const coded = btoa(JSON.stringify(parsed));
    return this.http.post(urls.emailAuthentication, JSON.stringify({payload: coded}), httpOptions);
  }

  usernameAuthentication(username, password) : Observable<any> {
    const parsed = {username : username, password : password }
    const coded = btoa(JSON.stringify(parsed));
    return this.http.post(urls.usernameAuthentication, JSON.stringify({payload: coded}), httpOptions);
  }

  signup(firstname, lastname, email, username, password) {
    const parsed = {
      firstname : firstname, lastname : lastname, email : email,
      username : username, password : password }
    const coded = btoa(JSON.stringify(parsed));
    return this.http.post(urls.signup, JSON.stringify({payload: coded}), httpOptions);
  }

  logout() {
    localStorage.clear();
  }

}
