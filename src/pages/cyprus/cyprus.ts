import { GetdataProvider } from "./../../providers/getdata/getdata";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-cyprus",
  templateUrl: "cyprus.html"
})
export class CyprusPage {
  page: string = "cyprusAll";
  items0: any;
  items1: any;
  items: any;
  tempItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata: GetdataProvider) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {
    this.getdata.getRemoteData("https://alphanews.live/json/cat/1").then(data => {
      this.tempItem = data;
      this.items0 = this.tempItem[0];
      this.tempItem.shift();
      this.items1 = this.tempItem[0];
      this.tempItem.shift();
      this.items = this.tempItem;
    });
  }
}
