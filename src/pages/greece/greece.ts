import { GetdataProvider } from "./../../providers/getdata/getdata";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-greece",
  templateUrl: "greece.html"
})
export class GreecePage {
  items0: any;
  items1: any;
  items: any;
  tempItem: any;
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;
  isRestInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];
  pageNo: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgprvd: StorageproviderProvider,
    public storage: Storage,
    public alert: AlertController
  ) {
    this.pageNo = this.navParams.get("pageNo");
  }

  ionViewDidLoad() {
    let pageNoSt = String(this.pageNo);
    let url = "https://alphanews.live/json/cat/4?page=" + pageNoSt;
    this.getdata.getRemoteData(url).then(data => {
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

  putItemsInArray(index, val) {
    this.isRestInFavs[index] = val;
  }

  ionViewDidEnter() {}

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

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }

  goToNextCat(e) {
    if (e.direction == 2) {
      this.navCtrl.push("IntPage", { StorageData: "IntData" });
    } else if (e.direction == 4) {
      this.navCtrl.push("PolitikiPage", { StorageData: "PolData" });
    }
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }

  showNextTen() {
    this.pageNo += 1;
    this.navCtrl.push("GreecePage", {
      StorageData: "GreeceData",
      pageNo: this.pageNo
    });
  }
}
