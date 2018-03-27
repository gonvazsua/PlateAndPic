import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth';
import { LoadingProvider } from '../../../utils/loading';
import { UserProvider } from '../../../providers/user';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm     : FormGroup;
  incorrectLogin: boolean;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public authProvider: AuthProvider,
    public loading: LoadingProvider,
    public userProvider: UserProvider) {

    this.loginForm = this.formBuilder.group({
      id : ['', Validators.required],
      password : ['', Validators.required]
    });
    this.incorrectLogin = false;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkLogin() {
    this.incorrectLogin = false;
    this.loginForm.markAsTouched();
    if(this.isEmailAuthentication()){
      this.authenticateEmail();
    } else {
      this.authenticateUsername();
    }
  }

  isEmailAuthentication() {
    return this.loginForm.get('id').valid 
      && this.loginForm.get('id').value.indexOf('@') > 0;
  }

  authenticateEmail() {
    this.loading.showLoading();
    this.authProvider.emailAuthentication(this.loginForm.get('id').value, this.loginForm.get('password').value).subscribe(
      response => {
        this.loading.hideLoading();
        this.chekResponse(response.json());
      },
      err => {
        this.loading.hideLoading();
        this.incorrectLogin = true;
      }
    );
  }

  authenticateUsername() {
    this.loading.showLoading();
    this.authProvider.usernameAuthentication(this.loginForm.get('id').value, this.loginForm.get('password').value).subscribe(
      response => {
        this.loading.hideLoading();
        this.chekResponse(response);
      },
      err => {
        this.loading.hideLoading();
        this.incorrectLogin = true;
      }
    );
  }

  chekResponse(response) {
    if(!response.success) this.incorrectLogin = true;
    else {
      localStorage.setItem("token", response.token);    
      this.userProvider.setUser(response.user);
      this.navCtrl.setRoot(TabsPage);
    }
  }

}
