import { GetdataProvider } from "./../../providers/getdata/getdata";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";

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
  showAll: boolean;
  neaAgorasPage: boolean = true;
  neaagoras0: any;
  neaagoras1: any;
  neaagoras: any;
  tempItem: any;
  tempItem2: any;
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;
  isRestInFavs: Array<boolean> = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];

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
    this.neaAgorasPage = this.navParams.get("neaAgorasPage");
    if (this.neaAgorasPage) {
      this.hideAll();
      this.page = "marketnews";
    }
    this.getdata
      .getRemoteData("https://alphanews.live/json/cat/1")
      .then(data => {
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
    this.getdata
      .getRemoteData("https://alphanews.live/json/cyprus/2246")
      .then(data => {
        this.tempItem2 = data;
        this.neaagoras0 = this.tempItem2[0];
        this.tempItem2.shift();
        this.neaagoras1 = this.tempItem2[0];
        this.tempItem2.shift();
        this.neaagoras = this.tempItem2;
        this.showAll = false;
      });
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
