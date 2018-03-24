import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
    public navCtrl: NavController) {

  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToSignup() {
    this.navCtrl.push(SignupPage);
  }

}
