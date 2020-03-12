import { Component, OnInit } from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private locationKey: string;
  private temperature: any;
  private weatherId: any;
  private isDay: boolean;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocationKey();
  }

  getLocationKey() {
    this.weatherService.getLocationKey().then(
      res => {
          this.locationKey = res.locationKey.Key;
          this.getTemperature(this.locationKey);
      }
    );
  }

  getTemperature(locationKey: any) {
    this.weatherService.getTemperature(locationKey).subscribe(
      res => {
        this.temperature = res[0].Temperature.Metric.Value + '\xB0' + res[0].Temperature.Metric.Unit;
        this.weatherId = res[0].WeatherText;
        this.isDay = res[0].IsDayTime;
      }
    );
  }
}
