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
import { HomePage } from '../pages/home/home/home';
import { UserProvider } from '../providers/user';
import { HttpProvider } from '../providers/httpProvider';
import { MainSettingsPage } from '../pages/settings/main-settings/main-settings';
import { PersonalSettingsPage } from '../pages/settings/personal-settings/personal-settings';
import { ProfilePicturePage } from '../pages/settings/profile-picture/profile-picture';
import { RestaurantSettingsPage } from '../pages/settings/restaurant-settings/restaurant-settings';
import { UpdatePasswordPage } from '../pages/settings/update-password/update-password';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    TabsPage,
    HeaderPage,
    HomePage,
    MainSettingsPage,
    PersonalSettingsPage,
    ProfilePicturePage,
    RestaurantSettingsPage,
    UpdatePasswordPage
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
    HeaderPage,
    HomePage,
    MainSettingsPage,
    PersonalSettingsPage,
    ProfilePicturePage,
    RestaurantSettingsPage,
    UpdatePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    LoadingProvider,
    UserProvider,
    HttpProvider
  ]
})
export class AppModule {}
