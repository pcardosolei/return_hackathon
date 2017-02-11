import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { ContactsPage } from '../contacts/contacts';


/*
  Generated class for the MyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPagePage');
  }

  goToOtherPage() {
    this.navCtrl.push(ContactsPage);
    };

}

