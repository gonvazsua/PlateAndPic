import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProvider {

  loading : boolean;
  loader  : any;

  constructor(public loadingCtrl: LoadingController) {
    this.loading = false;
  }

  showLoading() {
    if(this.loading) return;
    this.loading = true;
    this.loader = this.loadingCtrl.create({
      spinner: 'crescent',
      dismissOnPageChange : false
    });
    this.loader.present();
  }

  hideLoading() {
    if(!this.loading || !this.loader) return;
    this.loading = false;
    this.loader.dismiss();
  }
}
