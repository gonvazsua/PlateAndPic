import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../models/user';
import { UserProvider } from '../../../providers/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-personal-settings',
  templateUrl: 'personal-settings.html',
})
export class PersonalSettingsPage {

  loggedUser  : User;
  userForm    : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider,
    public fb: FormBuilder) {

      this.loggedUser = null;
      this.userForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]]
      });
  }

  ionViewDidLoad() {
    this.loggedUser = this.userProvider.getLoggedUser();
    this.initUserForm();
  }

  initUserForm() {
    this.userForm.patchValue({
      email : this.loggedUser.email,
      username : this.loggedUser.username,
      firstname : this.loggedUser.username,
      lastname : this.loggedUser.lastname 
    });
  }





}
