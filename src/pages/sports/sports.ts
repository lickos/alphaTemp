import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";
import { Slides } from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";

@IonicPage()
@Component({
  selector: "page-sports",
  templateUrl: "sports.html"
})
export class SportsPage {
  @ViewChild(Slides) slides: Slides;
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
  showAll: boolean;
  showLink: boolean = false;
  mainLink: boolean = true;
  omades: any;
  omadaId: string;
  ngSwitchCase: string;
  cypChampion: boolean = false;
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;
  isRestInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgprvd: StorageproviderProvider,
    public storage: Storage,
    public alert: AlertController
  ) {
    this.navParams.get("showAll");
  }

  ionViewDidLoad() {
    this.showAll = this.navParams.get("showAll");
    this.cypChampion = this.navParams.get("cypChampion");
    console.log(this.cypChampion);
    this.getdata.getRemoteData("https://alphanews.live/json/cyprus-soccer-1").then(data => {
      this.omades = data;
      if (this.cypChampion) {
        this.ngSwitchCase = "'Cypriako'";
        this.hideAll();
      }
    });
  }

  ionViewDidEnter() {
    this.getdata.getRemoteData("https://alphanews.live/json/cat/6").then(data => {
      this.tempItem = data;
      this.items0 = this.tempItem[0];
      this.strgprvd.checkIfInfavs(this.items0.nid).then(val => {
        this.isInFavs0 = val;
      });
      this.tempItem.shift();
      this.items1 = this.tempItem[0];
      this.strgprvd.checkIfInfavs(this.items1.nid).then(val => {
        this.isInFavs1 = val;
      });
      this.tempItem.shift();
      this.items = this.tempItem;
      this.items.forEach((element, index) => {
        this.isInFavs(element.nid).then(val => {
          this.putItemsInArray(index, val);
        });
      });
    });
  }

  hideAll() {
    console.log("Kypriako");
    this.getdata.getRemoteData("https://alphanews.live/json/sports/76").then(data => {
      this.tempItem2 = data;
      console.log(this.tempItem2);
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
    this.getdata.getRemoteData("https://alphanews.live/json/sports/77").then(data => {
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
    this.getdata.getRemoteData("https://alphanews.live/json/sports/78").then(data => {
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
    this.getdata.getRemoteData("https://alphanews.live/json/sports/79").then(data => {
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
    this.page = "";
  }

  goToNextCat(e) {
    if (e.direction == 2) {
      this.navCtrl.push("OikonomiaPage", { StorageData: "EconomyData" });
    } else if (e.direction == 4) {
      this.navCtrl.push("IntPage", { StorageData: "IntData" });
    }
  }

  nextSlide() {
    this.slides.slideNext(500);
  }

  goToPrev() {
    this.slides.slidePrev(500);
  }

  openTeam(omadaId, name) {
    this.navCtrl.push("OmadesPage", { omadaId: omadaId, name: name });
  }

  putItemsInArray(index, val) {
    this.isRestInFavs[index] = val;
  }

  setFav0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs0 = true;
  }

  setFav(item, index) {
    this.strgprvd.setFavs(item);
    this.isRestInFavs[index] = true;
  }

  setFav1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs1 = true;
  }

  alertFav() {
    this.storage.remove("favs");
    let alertBox = this.alert.create({
      title: "Already in Favorites",
      subTitle: "Το άρθρο αυτό είναι ήδη στα Αγαπημένα",
      buttons: ["OK"]
    });
    alertBox.present();
  }

  isInFavs(nid) {
    return new Promise(resolve => {
      this.strgprvd.checkIfInfavs(nid).then(val => {
        resolve(val);
      });
    });
  }
}
