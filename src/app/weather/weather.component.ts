import { Component, OnInit } from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private locationKey: string;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocationKey();
  }

  getLocationKey() {
    this.weatherService.getLocationKey().then(
      res => {
          this.locationKey = res.locationKey.Key;
      }
    );
  }
}
