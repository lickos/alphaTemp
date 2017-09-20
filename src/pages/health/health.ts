import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-health",
  templateUrl: "health.html"
})
export class HealthPage {
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
  omades: any;
  omadaId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata: GetdataProvider) {}

  ionViewDidLoad() {
    this.getdata.getRemoteData("https://alphanews.live/json/cat/8").then(data => {
      this.tempItem = data;
      this.items0 = this.tempItem[0];
      this.tempItem.shift();
      this.items1 = this.tempItem[0];
      this.tempItem.shift();
      this.items = this.tempItem;
    });
  }

  hideAll() {
    this.getdata.getRemoteData("http://alphanews.live/json/health/554").then(data => {
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
    this.getdata.getRemoteData(" http://alphanews.live/json/health/555").then(data => {
      this.tempItem3 = data;
      this.greek0 = this.tempItem3[0];
      this.tempItem3.shift();
      this.greek1 = this.tempItem3[0];
      this.tempItem3.shift();
      this.items3 = this.tempItem3;
      this.showAll = false;
      this.showLink = true;
      this.mainLink = false;
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

  openTeam(omadaId, name) {
    this.navCtrl.push("OmadesPage", { omadaId: omadaId, name: name });
  }
}
