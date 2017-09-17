import { GetdataProvider } from "./../../providers/getdata/getdata";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-int",
  templateUrl: "int.html"
})
export class IntPage {
  items0: any;
  items1: any;
  items: any;
  tempItem: any;
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgprvd: StorageproviderProvider,
    public storage: Storage,
    public alert: AlertController
  ) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {
    this.getdata
      .getRemoteData("https://alphanews.live/json/cat/5")
      .then(data => {
        this.tempItem = data;
        this.items0 = this.tempItem[0];
        this.strgprvd.checkIfInfavs(this.items0.nid).then(val => {
          this.isInFavs0 = val;
        });
        this.tempItem.shift();
        this.items1 = this.tempItem[0];
        this.tempItem.shift();
        this.items = this.tempItem;
      });
  }

  setFav0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs0 = true;
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

  isInFavs(item) {
    let nid = item.nid;
    this.strgprvd.checkIfInfavs(nid).then(val => {
      return val;
    });
  }
}
