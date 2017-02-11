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
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ContactsPage } from '../contacts/contacts';
/*
  Generated class for the MyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeOptions = {
            initialSlide: 0,
            loop: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPagePage');
    };
    HomePage.prototype.goToOtherPage = function () {
        this.navCtrl.push(ContactsPage);
    };
    ;
    return HomePage;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map