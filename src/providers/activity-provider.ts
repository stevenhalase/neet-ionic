import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Activity } from './activity';

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityProvider {

  constructor(public http: Http) {

  }

  getActivities() : Observable<Response> {
    let activitiesUrl = 'http://neet-api.herokuapp.com/api/activities';
    return this.http.get(activitiesUrl);
  }

}
