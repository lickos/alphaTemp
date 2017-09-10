import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-sports",
  templateUrl: "sports.html"
})
export class SportsPage {
  page: string;
  items0: any;
  items1: any;
  items2: any;
  items3: any;
  items4: any;
  items5: any;
  items6: any;
  items7: any;
  items8: any;
  items9: any;
  cypriako0: any;
  cypriako1: any;
  cypriako2: any;
  cypriako3: any;
  cypriako4: any;
  cypriako5: any;
  cypriako6: any;
  cypriako7: any;
  cypriako8: any;
  cypriako9: any;

  showAll: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider
  ) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {
    this.getdata
      .getRemoteData("https://alphanews.live/json/cat/6")
      .then(data => {
        this.items0 = data[0];
        this.items1 = data[1];
        this.items2 = data[2];
        this.items3 = data[3];
        this.items4 = data[4];
        this.items5 = data[5];
        this.items6 = data[6];
        this.items7 = data[7];
        this.items8 = data[8];
        this.items9 = data[9];
      });
  }

  hideAll() {
    this.getdata
      .getRemoteData("https://alphanews.live/json/sports/76")
      .then(data => {
        this.cypriako0 = data[0];
        this.cypriako1 = data[1];
        this.cypriako2 = data[2];
        this.cypriako3 = data[3];
        this.cypriako4 = data[4];
        this.cypriako5 = data[5];
        this.cypriako6 = data[6];
        this.cypriako7 = data[7];
        this.cypriako8 = data[8];
        this.cypriako9 = data[9];
        this.showAll = false;
      });
  }

  showAgain() {
    this.showAll = true;
    this.page = "";
  }
}
