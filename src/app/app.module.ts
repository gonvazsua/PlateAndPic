import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/index/main/main';
import { LoginPage } from '../pages/index/login/login';
import { SignupPage } from '../pages/index/signup/signup';
import { AuthProvider } from '../providers/auth';
import { HttpClientModule } from '@angular/common/http';
import { LoadingProvider } from '../utils/loading';
import { HeaderPage } from '../pages/common/header/header';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    TabsPage,
    HeaderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    TabsPage,
    HeaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    LoadingProvider
  ]
})
export class AppModule {}
