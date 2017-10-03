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
  pageNo: number;
  isRestInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];
  isneaInFavs0: boolean = false;
  isneaInFavs1: boolean = false;
  isRestNeaInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgprvd: StorageproviderProvider,
    public storage: Storage,
    public alert: AlertController
  ) {
    this.navParams.get("showAll");
    this.pageNo = this.navParams.get("pageNo");
  }

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }

  openFirst() {
    this.navCtrl.push("CyprusPage", { StorageData: "CypData", pageNo: 0 });
  }

  ionViewDidLoad() {
    this.neaAgorasPage = this.navParams.get("neaAgorasPage");
    if (this.neaAgorasPage) {
      this.hideAll();
      this.page = "marketnews";
    }
    let pageNoSt = String(this.pageNo);
    console.log(pageNoSt);
    let url = "https://alphanews.live/json/cat/1?page=" + pageNoSt;
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

  hideAll() {
    let url = "https://alphanews.live/json/cyprus/2246";
    this.getdata.getRemoteData(url).then(data => {
      this.tempItem2 = data;
      this.neaagoras0 = this.tempItem2[0];
      this.strgprvd.checkIfInfavs(this.neaagoras0.nid).then(val => {
        this.isneaInFavs0 = val;
      });
      this.tempItem2.shift();
      this.neaagoras1 = this.tempItem2[0];
      this.strgprvd.checkIfInfavs(this.neaagoras1.nid).then(val => {
        this.isneaInFavs1 = val;
      });
      this.tempItem2.shift();
      this.neaagoras = this.tempItem2;
      this.neaagoras.forEach((element, index) => {
        this.isInFavs(element.nid).then(val => {
          this.putItemsInArray2(index, val);
        });
      });
      this.showAll = false;
    });
  }

  putItemsInArray(index, val) {
    this.isRestInFavs[index] = val;
  }

  putItemsInArray2(index, val) {
    this.isRestNeaInFavs[index] = val;
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

  setnea0(item) {
    this.strgprvd.setFavs(item);
    this.isneaInFavs0 = true;
  }

  setnea1(item) {
    this.strgprvd.setFavs(item);
    this.isneaInFavs1 = true;
  }

  setNeaFav(item, i) {
    this.strgprvd.setFavs(item);
    this.isRestNeaInFavs[i] = true;
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

  goToNextCat(e) {
    if (e.direction == 2) {
      this.navCtrl.push("PolitikiPage", { StorageData: "PolData", pageNo: 0 });
    } else if (e.direction == 4) {
      this.navCtrl.push("HomePage");
    }
  }

  showNextTen() {
    this.pageNo += 1;
    this.navCtrl.push("CyprusPage", { StorageData: "CypData", pageNo: this.pageNo });
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }
}
