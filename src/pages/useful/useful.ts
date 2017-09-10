import { ComponentsModule } from "./../../components/components.module";
import { Geolocation } from "@ionic-native/geolocation";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-useful",
  templateUrl: "useful.html"
})
export class UsefulPage {
  useful: string = "weather";
  lat: string;
  lng: string;
  dataWeather: any;
  time1: any;
  dateOfWeather1: any;
  icon1: any;
  time2: any;
  dateOfWeather2: any;
  icon2: any;
  time3: any;
  dateOfWeather3: any;
  icon3: any;
  time4: any;
  dateOfWeather4: any;
  icon4: any;
  time5: any;
  dateOfWeather5: any;
  icon5: any;

  constructor(
    public navCtrl: NavController,
    public getData: GetdataProvider,
    public geolocation: Geolocation,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(resp => {
      this.lat = resp.coords.latitude.toString();
      this.lng = resp.coords.longitude.toString();
      let url =
        "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
        this.lat +
        "&lon=" +
        this.lng +
        "&appid=ce7763e849251b495a1832fbcd685f5c&lang=el";
      this.getData.getRemoteData(url).then(data => {
        this.dataWeather = data;
        this.time1 = this.dataWeather.list[0].dt;
        this.time2 = this.dataWeather.list[1].dt;
        this.time3 = this.dataWeather.list[2].dt;
        this.time4 = this.dataWeather.list[3].dt;
        this.time5 = this.dataWeather.list[4].dt;
        let date = new Date(this.time1 * 1000);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        this.dateOfWeather1 = day + "/" + month + "/" + year;
        let date2 = new Date(this.time2 * 1000);
        let day2 = date2.getDate();
        let month2 = date2.getMonth() + 1;
        let year2 = date2.getFullYear();
        this.dateOfWeather2 = day2 + "/" + month2 + "/" + year2;
        this.icon1 =
          "http://openweathermap.org/img/w/" +
          this.dataWeather.list[0].weather[0].icon +
          ".png";
        this.icon2 =
          "http://openweathermap.org/img/w/" +
          this.dataWeather.list[1].weather[0].icon +
          ".png";
        this.icon3 =
          "http://openweathermap.org/img/w/" +
          this.dataWeather.list[2].weather[0].icon +
          ".png";
        this.icon4 =
          "http://openweathermap.org/img/w/" +
          this.dataWeather.list[3].weather[0].icon +
          ".png";
        this.icon5 =
          "http://openweathermap.org/img/w/" +
          this.dataWeather.list[4].weather[0].icon +
          ".png";
        let date3 = new Date(this.time3 * 1000);
        let day3 = date3.getDate();
        let month3 = date3.getMonth() + 1;
        let year3 = date3.getFullYear();
        this.dateOfWeather3 = day3 + "/" + month3 + "/" + year3;
        let date4 = new Date(this.time4 * 1000);
        let day4 = date4.getDate();
        let month4 = date4.getMonth() + 1;
        let year4 = date4.getFullYear();
        this.dateOfWeather4 = day4 + "/" + month4 + "/" + year4;
        let date5 = new Date(this.time5 * 1000);
        let day5 = date5.getDate();
        let month5 = date5.getMonth() + 1;
        let year5 = date5.getFullYear();
        this.dateOfWeather5 = day5 + "/" + month5 + "/" + year5;
      });
    });
  }
}
