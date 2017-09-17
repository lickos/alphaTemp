import { GetdataProvider } from "./../../providers/getdata/getdata";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-oikonomia",
  templateUrl: "oikonomia.html"
})
export class OikonomiaPage {
  items0: any;
  items1: any;
  items: any;
  tempItem: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OikonomiaPage");
  }
  ionViewDidEnter() {
    this.getdata
      .getRemoteData("https://alphanews.live/json/cat/9")
      .then(data => {
        this.tempItem = data;
        this.items0 = this.tempItem[0];
        this.tempItem.shift();
        this.items1 = this.tempItem[0];
        this.tempItem.shift();
        this.items = this.tempItem;
      });
  }
}
