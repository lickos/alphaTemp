import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-ent",
  templateUrl: "ent.html"
})
export class EntPage {
  page: string;
  items0: any;
  items1: any;
  items: any;
  tempItem: any;
  cypriako0: any;
  cypriako1: any;
  items2: any;
  tempItem2: any;
  items3: any;
  tempItem3: any;
  greek0: any;
  greek1: any;
  items4: any;
  tempItem4: any;
  int0: any;
  int1: any;
  items5: any;
  tempItem5: any;
  sports0: any;
  sports1: any;
  showAll: boolean = true;
  showLink: boolean = false;
  mainLink: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata: GetdataProvider) {}

  ionViewDidLoad() {
    this.getdata.getRemoteData("https://alphanews.live/json/cat/7").then(data => {
      this.tempItem = data;
      this.items0 = this.tempItem[0];
      this.tempItem.shift();
      this.items1 = this.tempItem[0];
      this.tempItem.shift();
      this.items = this.tempItem;
    });
  }

  hideAll() {
    this.getdata.getRemoteData("http://alphanews.live/json/entertainment/72").then(data => {
      this.tempItem2 = data;
      this.cypriako0 = this.tempItem2[0];
      this.tempItem2.shift();
      this.cypriako1 = this.tempItem2[0];
      this.tempItem2.shift();
      this.items2 = this.tempItem2;
      this.showAll = false;
      this.showLink = true;
      this.mainLink = false;
    });
  }

  showGreek() {
    this.getdata.getRemoteData("http://alphanews.live/json/entertainment/73").then(data => {
      this.tempItem3 = data;
      this.greek0 = this.tempItem3[0];
      this.tempItem3.shift();
      this.greek1 = this.tempItem3[0];
      this.tempItem3.shift();
      this.items3 = this.tempItem3;
      this.showAll = false;
    });
  }

  showInt() {
    this.getdata.getRemoteData("http://alphanews.live/json/entertainment/74").then(data => {
      this.tempItem4 = data;
      this.int0 = this.tempItem4[0];
      this.tempItem4.shift();
      this.int1 = this.tempItem4[0];
      this.tempItem4.shift();
      this.items4 = this.tempItem4;
      this.showAll = false;
    });
  }

  showSports() {
    this.getdata.getRemoteData("http://alphanews.live/json/entertainment/75").then(data => {
      this.tempItem5 = data;
      this.sports0 = this.tempItem5[0];
      this.tempItem5.shift();
      this.sports1 = this.tempItem5[0];
      this.tempItem5.shift();
      this.items5 = this.tempItem5;
      this.showAll = false;
    });
  }

  showAgain() {
    this.showAll = true;
    this.mainLink = true;
    this.showLink = false;
    this.page = "";
  }

  goToNextCat(e) {
    if (e.direction == 2) {
      this.navCtrl.push("OikonomiaPage", { StorageData: "EconomyData" });
    } else if (e.direction == 4) {
      this.navCtrl.push("IntPage", { StorageData: "IntData" });
    }
  }
}
