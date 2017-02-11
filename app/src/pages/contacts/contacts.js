var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotifPage } from '../add-notif/add-notif';
/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = [
            'Avó Maria',
            'Avô Ricardo',
            'Mãe',
            'Pai'
        ];
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage.prototype.goToOtherPage = function (item) {
        this.navCtrl.push(NotifPage, {
            param1: item
        });
    };
    return ContactsPage;
}());
ContactsPage = __decorate([
    Component({
        selector: 'page-contacts',
        templateUrl: 'contacts.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], ContactsPage);
export { ContactsPage };
//# sourceMappingURL=contacts.js.map