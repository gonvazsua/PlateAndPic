import { Component } from '@angular/core';
import { HomePage } from '../home/home/home';
import { MainSettingsPage } from '../settings/main-settings/main-settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MainSettingsPage;
/*  
  tab3Root = ContactPage;
*/
  constructor() {
    
  }
}
