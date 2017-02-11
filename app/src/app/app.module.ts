import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { NotifPage } from '../pages/add-notif/add-notif';
import { ContactsPage } from '../pages/contacts/contacts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotifPage,
    ContactsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotifPage,
    ContactsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
