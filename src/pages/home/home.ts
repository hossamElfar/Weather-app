import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  country: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.weather = "";
    this.country = {
      city: ""
    }
  }
  getWeather() {
    this.weather = ""
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+this.country.city+"&appid=fd5cb56492fbf5fdaf4516598ce7d4db").map(res => res.json()).subscribe(data => {
      this.weather = data.main.temp - 273.15 
    },
      err => {
      }
    )

  }

}
