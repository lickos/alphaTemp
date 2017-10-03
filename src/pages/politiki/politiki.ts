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
  mainLink: boolean = true;
  showLink: boolean = false;
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
  pageNo: number;
  showAll: boolean = true;
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;
  isRestInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];
  isneaInFavs0: boolean = false;
  isneaInFavs1: boolean = false;
  isRestNeaInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];
  isEnergeia0: boolean = false;
  isEnergeia1: boolean = false;
  isRestEnergeiaInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];

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
    this.pageNo = this.navParams.get("pageNo");
    if (this.cypriakoPage) {
      this.page = "cypriako";
      this.showCypriako();
    }
    this.energeia = this.navParams.get("energeia");
    if (this.energeia) {
      this.page = "energeia";
      this.showEnergeia();
    }
    let pageNo = String(this.pageNo);
    let url = "https://alphanews.live/json/cat/2?page=" + pageNo;
    this.getdata.getRemoteData(url).then(data => {
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

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }

  ionViewDidEnter() {}

  putItemsInArray(index, val) {
    this.isRestInFavs[index] = val;
  }

  putItemsInArray2(index, val) {
    this.isRestNeaInFavs[index] = val;
  }

  putItemsInArray3(index, val) {
    this.isRestEnergeiaInFavs[index] = val;
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
    this.getdata.getRemoteData(" http://alphanews.live/json/politics/59").then(data => {
      this.tempItem1 = data;
      this.cypriako0 = this.tempItem1[0];
      this.strgprvd.checkIfInfavs(this.cypriako0.nid).then(val => {
        this.isneaInFavs0 = val;
      });
      this.tempItem1.shift();
      this.cypriako1 = this.tempItem1[0];
      this.strgprvd.checkIfInfavs(this.cypriako1.nid).then(val => {
        this.isneaInFavs1 = val;
      });
      this.tempItem1.shift();
      this.items1 = this.tempItem1;
      this.items1.forEach((element, index) => {
        this.isInFavs(element.nid).then(val => {
          this.putItemsInArray2(index, val);
        });
      });
      this.showAll = false;
    });
  }

  setnea0(item) {
    this.strgprvd.setFavs(item);
    this.isneaInFavs0 = true;
  }

  setnea1(item) {
    this.strgprvd.setFavs(item);
    this.isneaInFavs1 = true;
  }

  setNeaFav(item, index) {
    this.strgprvd.setFavs(item);
    this.isRestNeaInFavs[index] = true;
  }

  showEnergeia() {
    this.getdata.getRemoteData(" http://alphanews.live/json/politics/60").then(data => {
      this.tempItem2 = data;
      this.energeia0 = this.tempItem2[0];
      this.strgprvd.checkIfInfavs(this.energeia0.nid).then(val => {
        this.isEnergeia0 = val;
      });
      this.tempItem2.shift();
      this.energeia1 = this.tempItem2[0];
      this.strgprvd.checkIfInfavs(this.energeia1.nid).then(val => {
        this.isEnergeia1 = val;
      });
      this.tempItem2.shift();
      this.items2 = this.tempItem2;
      this.items2.forEach((element, index) => {
        this.isInFavs(element.nid).then(val => {
          this.putItemsInArray3(index, val);
        });
      });
      this.showAll = false;
    });
  }

  setEnergeia0InFavs(item) {
    this.strgprvd.setFavs(item);
    this.isEnergeia0 = true;
  }

  setEnergeia1InFavs(item) {
    this.strgprvd.setFavs(item);
    this.isEnergeia1 = true;
  }

  setRestEnergeiaInFavs(item, index) {
    this.strgprvd.setFavs(item);
    this.isRestEnergeiaInFavs[index] = true;
  }

  showAgain() {
    this.showAll = true;
    this.page = "";
  }

  goToNextCat(e) {
    if (e.direction == 2) {
      this.navCtrl.push("GreecePage", { StorageData: "GreeceData", pageNo: 0 });
    } else if (e.direction == 4) {
      this.navCtrl.push("CyprusPage", { StorageData: "CypData", pageNo: 0 });
    }
  }

  openFirst() {
    this.navCtrl.push("PolitikiPage", { StorageData: "PolData", pageNo: 0 });
  }

  showNextTen() {
    this.pageNo += 1;
    this.mainLink = false;
    this.showLink = true;
    console.log(this.mainLink);
    console.log(this.showLink);
    this.navCtrl.push("PolitikiPage", { StorageData: "PolData", pageNo: this.pageNo });
  }
}
