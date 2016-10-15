import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController, ModalController, ViewController } from 'ionic-angular';

import {Geolocation} from 'ionic-native';

import { ActivityProvider } from '../../providers/activity-provider';
import { Activity } from '../../providers/activity';

import { ActivityRequestPage } from '../activity-request/activity-request';

declare var google;

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  activities : Array<Activity>;
  selectedActivity : Activity;

  constructor(public navCtrl: NavController, private ActivityProvider: ActivityProvider, public modalCtrl: ModalController, public viewCtrl: ViewController) {

  }

  ionViewDidLoad(){
    this.loadMap();
    this.ActivityProvider.getActivities()
      .subscribe(activities => {
        this.activities = activities;
        console.log(this.activities)
      })

  }

  loadMap(){

    Geolocation.getCurrentPosition().then((position) => {

      let latLng : Object = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions : Object = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let markers : Array<Object>;
      for (let activity of this.activities) {

        let marker1 : Object = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: {
            lat: parseFloat(activity.place.location.lat),
            lng: parseFloat(activity.place.location.lng)
          }
        });

        let content : String = `<h4>${activity.user.name}</h4><p>${activity.description}`;

        this.addInfoWindow(marker1, content);
      }

    }, (err) => {
      console.log(err);
    });

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  selectActivity(activity) {
    console.log('running')
    let modal = this.modalCtrl.create(ActivityRequestPage);
    modal.present();
  }

}
