import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth';
import { LoadingProvider } from '../../../utils/loading';
import { UserProvider } from '../../../providers/user';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm     : FormGroup;
  error          : string;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public authProvider: AuthProvider,
    public loading: LoadingProvider,
    public userProvider: UserProvider) {

    this.signupForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      username : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
    this.error = null;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  checkSignup() {
    this.signupForm.markAsTouched();
    this.loading.showLoading();
    this.sendForm();
  }

  sendForm() {
    this.authProvider.signup(
      this.signupForm.get('firstname').value, this.signupForm.get('lastname').value,
      this.signupForm.get('email').value, this.signupForm.get('username').value,
      this.signupForm.get('password').value).subscribe(
        response => {
          this.loading.hideLoading();
          this.chekResponseAndRedirect(response);
        },
        err => {
          this.loading.hideLoading();
          this.error = "Error al registrar";
        }
    );
  }

  chekResponseAndRedirect(response) {
    if(!response.success) this.error = response.message;
    else {
      localStorage.setItem("token", response.token);      
      this.userProvider.setUser(response.user);
      this.navCtrl.setRoot(TabsPage);
    }
  }

}
