import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Geolocation} from 'ionic-native';

import { ActivityProvider } from '../../providers/activity-provider';

declare var google;

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private ActivityProvider: ActivityProvider) {

  }

  ionViewDidLoad(){
    this.loadMap();
    this.ActivityProvider.getActivities().subscribe((response) => {
      console.log(response)
    })

  }

  loadMap(){

    Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker1 = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: {lat: 43.004482, lng: -87.940650}
      });

      let content = "<h4>Information!</h4>";

      this.addInfoWindow(marker1, content);

      let marker2 = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: {lat: 43.004156, lng: -87.936192}
      });

      let content2 = "<h4>Information!</h4>";

      this.addInfoWindow(marker2, content2);

      let marker3 = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: {lat: 43.000342, lng: -87.937752}
      });

      let content3 = "<h4>Information!</h4>";

      this.addInfoWindow(marker3, content3);

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

}
