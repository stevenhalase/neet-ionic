import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController, ModalController, ViewController } from 'ionic-angular';

import {Geolocation} from 'ionic-native';

import { ActivityProvider } from '../../providers/activity-provider';
import { Activity } from '../../providers/activity';

declare var google;

@Component({
  selector: 'page-activities-request',
  templateUrl: 'activity-request.html'
})
export class ActivityRequestPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  activities : Array<Activity>;
  selectedActivity : Activity;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  ionViewDidLoad(){
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
