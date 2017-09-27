import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";

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
  cypriakoPage: boolean = false;
  cypriako0: any;
  cypriako1: any;
  items1: any;
  tempItem1: any;
  energeia: boolean = false;
  energeia0: any;
  energeia1: any;
  tempItem2: any;
  items2: any;
  showAll: boolean = true;
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
  ) {}

  ionViewDidLoad() {
    this.cypriakoPage = this.navParams.get("cypriakoPage");
    if (this.cypriakoPage) {
      this.page = "cypriako";
      this.showCypriako();
    }
    this.energeia = this.navParams.get("energeia");
    if (this.energeia) {
      this.page = "energeia";
      this.showEnergeia();
    }
    this.getdata
      .getRemoteData("https://alphanews.live/json/cat/2")
      .then(data => {
        this.tempItem = data;
        this.politiki0 = this.tempItem[0];
        this.strgprvd.checkIfInfavs(this.politiki0.nid).then(val => {
          this.isInFavs0 = val;
        });
        this.tempItem.shift();
        this.politiki1 = this.tempItem[0];
        this.strgprvd.checkIfInfavs(this.politiki1.nid).then(val => {
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

  ionViewDidEnter() {}

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

  showCypriako() {
    this.getdata
      .getRemoteData(" http://alphanews.live/json/politics/59")
      .then(data => {
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
    this.getdata
      .getRemoteData(" http://alphanews.live/json/politics/60")
      .then(data => {
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
