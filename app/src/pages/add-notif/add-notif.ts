import { Component } from '@angular/core';
import { NavParams, NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import * as moment from 'moment';

declare var cordova:any;

@Component({
  selector: 'page-add-notif',
  templateUrl: 'add-notif.html'
})

export class NotifPage {

    notifyTime: any;
    notifications: any[] = [];
    days: any[];
    chosenHours: number;
    chosenMinutes: number;
    qty:any;
    tempo:number;
    nome:any;

    // --
    module:any;

    constructor(public navCtrl: NavController,public navParams: NavParams, public platform: Platform, public alertCtrl: AlertController) {

        this.notifyTime = moment(new Date()).format();
        this.nome = navParams.get('param1');
        this.chosenHours = new Date().getHours();
        this.chosenMinutes = new Date().getMinutes();

        this.days = [
            {title: 'Monday', dayCode: 1, checked: false},
            {title: 'Tuesday', dayCode: 2, checked: false},
            {title: 'Wednesday', dayCode: 3, checked: false},
            {title: 'Thursday', dayCode: 4, checked: false},
            {title: 'Friday', dayCode: 5, checked: false},
            {title: 'Saturday', dayCode: 6, checked: false},
            {title: 'Sunday', dayCode: 0, checked: false}
        ];

    }

    ionViewDidLoad(){

    }

    timeChange(time){
      this.chosenHours = time.hour.value;
      this.chosenMinutes = time.minute.value;
    }

    addNotifications(){
      cordova.plugins.backgroundMode.enable();

      let currentDate = new Date();
      let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.


      for(let day of this.days){

          if(day.checked){

              let firstNotificationTime = new Date();
              let dayDifference = day.dayCode - currentDay;

              if(dayDifference < 0){
                  dayDifference = dayDifference + 7; // for cases where the day is in the following week
              }

              firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
              firstNotificationTime.setHours(this.chosenHours);
              firstNotificationTime.setMinutes(this.chosenMinutes);

              let now = new Date().getTime();
              this.tempo = firstNotificationTime.getTime()-now;
              cordova.plugins.notification.local.schedule({
                text: this.qty,
                at: this.tempo,
                every: 'week',
                led: "FF0000",
                sound: null
              });
          }
       }
    }

    cancelAll(){
      LocalNotifications.cancelAll();

      let alert = this.alertCtrl.create({
          title: 'Notifications cancelled',
          buttons: ['Ok']
      });

      alert.present();
    }

}
