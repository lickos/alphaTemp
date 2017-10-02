import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";

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
  Cypriako: boolean = false;
  cypriako0: any;
  cypriako1: any;
  items2: any;
  tempItem2: any;
  items3: any;
  tempItem3: any;
  greek: boolean = false;
  greek0: any;
  greek1: any;
  items4: any;
  tempItem4: any;
  intSports: boolean = false;
  int0: any;
  int1: any;
  items5: any;
  tempItem5: any;
  otherSports: boolean = false;
  sports0: any;
  sports1: any;
  showAll: boolean = true;
  showLink: boolean = false;
  mainLink: boolean = true;
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;
  isRestInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgprvd: StorageproviderProvider,
    public alert: AlertController,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.Cypriako = this.navParams.get("Cypriako");
    if (this.Cypriako) {
      this.page = "Cypriako";
      this.hideAll();
    }
    this.greek = this.navParams.get("greek");
    if (this.greek) {
      this.page = "greek";
      this.showGreek();
    }
    this.intSports = this.navParams.get("intSports");
    if (this.intSports) {
      this.page = "intSports";
      this.showInt();
    }
    this.otherSports = this.navParams.get("otherSports");
    if (this.otherSports) {
      this.page = "otherSports";
      this.showSports();
    }
    this.getdata.getRemoteData("https://alphanews.live/json/cat/7").then(data => {
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

  setFav0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs0 = true;
  }

  setFav1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs1 = true;
  }

  isInFavs(nid) {
    return new Promise(resolve => {
      this.strgprvd.checkIfInfavs(nid).then(val => {
        resolve(val);
      });
    });
  }

  setFav(item, index) {
    this.strgprvd.setFavs(item);
    this.isRestInFavs[index] = true;
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

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
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
      this.navCtrl.push("HomePage");
    } else if (e.direction == 4) {
      this.navCtrl.push("HealthPage", { StorageData: "HealthData" });
    }
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
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
}
