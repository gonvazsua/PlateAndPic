import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantSettingsPage } from './restaurant-settings';

@NgModule({
  declarations: [
    RestaurantSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantSettingsPage),
  ],
})
export class RestaurantSettingsPageModule {}
