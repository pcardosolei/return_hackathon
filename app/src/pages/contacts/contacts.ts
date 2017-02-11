import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { NotifPage } from '../add-notif/add-notif';

/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  contacts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.contacts = [
            'Avó Maria',
            'Avô Ricardo',
            'Mãe',
            'Pai'
        ];
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  goToOtherPage(item) {
    this.navCtrl.push(NotifPage,{
      param1: item });
    }
}

