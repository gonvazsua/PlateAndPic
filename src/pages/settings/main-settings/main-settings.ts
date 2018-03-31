import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalSettingsPage } from '../personal-settings/personal-settings';
import { UpdatePasswordPage } from '../update-password/update-password';
import { RestaurantSettingsPage } from '../restaurant-settings/restaurant-settings';
import { AuthProvider } from '../../../providers/auth';
import { MainPage } from '../../index/main/main';

@IonicPage()
@Component({
  selector: 'page-main-settings',
  templateUrl: 'main-settings.html',
})
export class MainSettingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainSettingsPage');
  }

  goToPersonalSettings() {
    this.navCtrl.push(PersonalSettingsPage);
  }

  goToUpdatePassword() {
    this.navCtrl.push(UpdatePasswordPage);
  }

  goToMyRestaurants() {
    this.navCtrl.push(RestaurantSettingsPage);
  }

  logout() {
    this.authProvider.logout();
    this.navCtrl.setRoot(MainPage);
  }

}
