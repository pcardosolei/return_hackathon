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
import { NavParams, NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import * as moment from 'moment';
var NotifPage = (function () {
    function NotifPage(navCtrl, navParams, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.notifications = [];
        this.notifyTime = moment(new Date()).format();
        this.nome = navParams.get('param1');
        this.chosenHours = new Date().getHours();
        this.chosenMinutes = new Date().getMinutes();
        this.days = [
            { title: 'Monday', dayCode: 1, checked: false },
            { title: 'Tuesday', dayCode: 2, checked: false },
            { title: 'Wednesday', dayCode: 3, checked: false },
            { title: 'Thursday', dayCode: 4, checked: false },
            { title: 'Friday', dayCode: 5, checked: false },
            { title: 'Saturday', dayCode: 6, checked: false },
            { title: 'Sunday', dayCode: 0, checked: false }
        ];
    }
    NotifPage.prototype.ionViewDidLoad = function () {
    };
    NotifPage.prototype.timeChange = function (time) {
        this.chosenHours = time.hour.value;
        this.chosenMinutes = time.minute.value;
    };
    NotifPage.prototype.addNotifications = function () {
        cordova.plugins.backgroundMode.enable();
        var currentDate = new Date();
        var currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
        for (var _i = 0, _a = this.days; _i < _a.length; _i++) {
            var day = _a[_i];
            if (day.checked) {
                var firstNotificationTime = new Date();
                var dayDifference = day.dayCode - currentDay;
                if (dayDifference < 0) {
                    dayDifference = dayDifference + 7; // for cases where the day is in the following week
                }
                firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
                firstNotificationTime.setHours(this.chosenHours);
                firstNotificationTime.setMinutes(this.chosenMinutes);
                var now = new Date().getTime();
                this.tempo = firstNotificationTime.getTime() - now;
                cordova.plugins.notification.local.schedule({
                    text: this.qty,
                    at: this.tempo,
                    every: 'week',
                    led: "FF0000",
                    sound: null
                });
            }
        }
    };
    NotifPage.prototype.cancelAll = function () {
        LocalNotifications.cancelAll();
        var alert = this.alertCtrl.create({
            title: 'Notifications cancelled',
            buttons: ['Ok']
        });
        alert.present();
    };
    return NotifPage;
}());
NotifPage = __decorate([
    Component({
        selector: 'page-add-notif',
        templateUrl: 'add-notif.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Platform, AlertController])
], NotifPage);
export { NotifPage };
//# sourceMappingURL=add-notif.js.map