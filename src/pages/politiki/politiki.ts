import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-politiki",
  templateUrl: "politiki.html"
})
export class PolitikiPage {
  page: string = "politikiAll";
  politiki0: any;
  politiki1: any;
  items: any;
  tempItem: any;
  cypriako0: any;
  cypriako1: any;
  items1: any;
  tempItem1: any;
  energeia0: any;
  energeia1: any;
  tempItem2: any;
  items2: any;
  showAll: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata: GetdataProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PolitikiPage");
  }

  ionViewDidEnter() {
    this.getdata.getRemoteData("https://alphanews.live/json/cat/2").then(data => {
      this.tempItem = data;
      this.politiki0 = this.tempItem[0];
      this.tempItem.shift();
      this.politiki1 = this.tempItem[0];
      this.tempItem.shift();
      this.items = this.tempItem;
    });
  }

  showCypriako() {
    this.getdata.getRemoteData(" http://alphanews.live/json/politics/59").then(data => {
      this.tempItem1 = data;
      this.cypriako0 = this.tempItem1[0];
      this.tempItem1.shift();
      this.cypriako1 = this.tempItem1[0];
      this.tempItem1.shift();
      this.items1 = this.tempItem1;
      this.showAll = false;
    });
  }

  showEnergeia() {
    this.getdata.getRemoteData(" http://alphanews.live/json/politics/60").then(data => {
      this.tempItem2 = data;
      this.energeia0 = this.tempItem2[0];
      this.tempItem2.shift();
      this.energeia1 = this.tempItem2[0];
      this.tempItem2.shift();
      this.items2 = this.tempItem2;
      this.showAll = false;
    });
  }

  showAgain() {
    this.showAll = true;
    this.page = "";
  }
}
