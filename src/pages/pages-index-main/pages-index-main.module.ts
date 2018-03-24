import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesIndexMainPage } from './pages-index-main';

@NgModule({
  declarations: [
    PagesIndexMainPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesIndexMainPage),
  ],
})
export class PagesIndexMainPageModule {}
