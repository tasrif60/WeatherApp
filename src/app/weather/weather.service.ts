import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '3t7EAkvBFdWqQPHgLKAIIQJ6UyGfBVxb';

  constructor(private httpClient: HttpClient) { }

  getLocationKey(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(res => {
          /*resolve({lat: res.coords.latitude, lon: res.coords.longitude});*/
          // tslint:disable-next-line:max-line-length
          this.httpClient.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + this.apiKey + '&q=' + res.coords.latitude + '%2C' + res.coords.longitude).subscribe(
            result => {
              resolve({locationKey: result});
            }
          );
        },
        err => {
          reject(err);
        });
    });
  }
}
