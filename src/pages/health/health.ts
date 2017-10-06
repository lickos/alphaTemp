import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Storage } from "@ionic/storage";
import { GetdataProvider } from "./../../providers/getdata/getdata";
import { AlertController } from "ionic-angular";

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
  Cypraiko: boolean = false;
  Psych: boolean = false;
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
  pageNo: number;
  isRestInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;

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
    this.Cypraiko = this.navParams.get("Cypriako");
    if (this.Cypraiko) {
      this.page = "Cypriako";
      this.hideAll();
    }
    this.Psych = this.navParams.get("Psych");
    if (this.Psych) {
      this.page = "greek";
      this.showGreek();
    }
    this.getdata.getRemoteData("https://alphanews.live/json/cat/8").then(data => {
      this.tempItem = data;
      this.items0 = this.tempItem[0];
      this.strgprvd.checkIfInfavs(this.items0.nid).then(val => {
        this.isInFavs0 = val;
      });
      this.tempItem.shift();
      this.items1 = this.tempItem[0];
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

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
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

  isInFavs(nid) {
    return new Promise(resolve => {
      this.strgprvd.checkIfInfavs(nid).then(val => {
        resolve(val);
      });
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
      this.navCtrl.push("EntPage", { StorageData: "EntData", pageNo: 0 });
    } else if (e.direction == 4) {
      this.navCtrl.push("OikonomiaPage", { StorageData: "EconomyData" });
    }
  }

  putItemsInArray(index, val) {
    this.isRestInFavs[index] = val;
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }
}
