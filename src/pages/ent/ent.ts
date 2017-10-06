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
  showLink: boolean;
  mainLink: boolean;
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;
  isRestInFavs: Array<boolean> = [false, false, false, false, false, false, false, false];
  pageNo: number;
  isInFavsCypriako0: boolean = false;
  isInFavsCypriako1: boolean = false;
  isRestInFavsCypriako: Array<boolean> = [false, false, false, false, false, false, false, false];
  isInFavsGreek0: boolean = false;
  isInFavsGreek1: boolean = false;
  isRestInFavsGreek: Array<boolean> = [false, false, false, false, false, false, false, false];
  isInFavsInt0: boolean = false;
  isInFavsInt1: boolean = false;
  isRestInFavsInt: Array<boolean> = [false, false, false, false, false, false, false, false];
  isInFavsSports0: boolean = false;
  isInFavsSports1: boolean = false;
  isRestInFavsSport: Array<boolean> = [false, false, false, false, false, false, false, false];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgprvd: StorageproviderProvider,
    public alert: AlertController,
    public storage: Storage
  ) {
    this.pageNo = this.navParams.get("pageNo");
    if (this.pageNo == 0) {
      this.mainLink = true;
      this.showLink = false;
    } else {
      this.mainLink = false;
      this.showLink = true;
    }
  }

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
    let pageNoSt = String(this.pageNo);
    let url = "https://alphanews.live/json/cat/7?page=" + pageNoSt;
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

  putItemsInArray1(index, val) {
    this.isRestInFavsCypriako[index] = val;
  }

  putItemsInArray2(index, val) {
    this.isRestInFavsGreek[index] = val;
  }

  putItemsInArray3(index, val) {
    this.isRestInFavsInt[index] = val;
  }

  putItemsInArray4(index, val) {
    this.isRestInFavsInt[index] = val;
  }

  setFav0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs0 = true;
  }

  setFavCypriako0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsCypriako0 = true;
  }

  setFavCypriako1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsCypriako1 = true;
  }

  setFavCypriako(item, index) {
    this.strgprvd.setFavs(item);
    this.isRestInFavsCypriako[index] = true;
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

  isInFavsRestCypriako(nid) {
    return new Promise(resolve => {
      this.strgprvd.checkIfInfavs(nid).then(val => {
        resolve(val);
      });
    });
  }

  isInFavsRestGreek(nid) {
    return new Promise(resolve => {
      this.strgprvd.checkIfInfavs(nid).then(val => {
        resolve(val);
      });
    });
  }

  isInFavsRestInt(nid) {
    return new Promise(resolve => {
      this.strgprvd.checkIfInfavs(nid).then(val => {
        resolve(val);
      });
    });
  }

  isInFavsRestSport(nid) {
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
      this.strgprvd.checkIfInfavs(this.cypriako0.nid).then(val => {
        this.isInFavsCypriako0 = val;
      });
      this.tempItem2.shift();
      this.cypriako1 = this.tempItem2[0];
      this.strgprvd.checkIfInfavs(this.cypriako1.nid).then(val => {
        this.isInFavsCypriako1 = val;
      });
      this.tempItem2.shift();
      this.items2 = this.tempItem2;
      this.items2.forEach((element, index) => {
        this.isInFavsRestCypriako(element.nid).then(val => {
          this.putItemsInArray1(index, val);
        });
      });
      this.showAll = false;
      this.showLink = true;
      this.mainLink = false;
    });
  }

  showNextTen() {
    this.pageNo += 1;
    this.mainLink = false;
    this.showLink = true;
    this.navCtrl.push("EntPage", {
      StorageData: "EntData",
      pageNo: this.pageNo
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
      this.strgprvd.checkIfInfavs(this.greek0.nid).then(val => {
        this.isInFavsGreek0 = val;
      });
      this.tempItem3.shift();
      this.greek1 = this.tempItem3[0];
      this.strgprvd.checkIfInfavs(this.greek1.nid).then(val => {
        this.isInFavsGreek1 = val;
      });
      this.tempItem3.shift();
      this.items3 = this.tempItem3;
      this.items3.forEach((element, index) => {
        this.isInFavsRestGreek(element.nid).then(val => {
          this.putItemsInArray2(index, val);
        });
      });
      this.showAll = false;
      this.showLink = true;
      this.mainLink = false;
    });
  }

  setFavGreek0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsGreek0 = true;
  }

  setFavGreek1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsGreek1 = true;
  }

  setFavGreek(item, index) {
    this.strgprvd.setFavs(item);
    this.isInFavsRestGreek[index] = true;
  }

  showInt() {
    this.getdata.getRemoteData("http://alphanews.live/json/entertainment/74").then(data => {
      this.tempItem4 = data;
      this.int0 = this.tempItem4[0];
      this.strgprvd.checkIfInfavs(this.int0.nid).then(val => {
        this.isInFavsInt0 = val;
      });
      this.tempItem4.shift();
      this.int1 = this.tempItem4[0];
      this.strgprvd.checkIfInfavs(this.int1.nid).then(val => {
        this.isInFavsInt1 = val;
      });
      this.tempItem4.shift();
      this.items4 = this.tempItem4;
      this.items4.forEach((element, index) => {
        this.isInFavsRestInt(element.nid).then(val => {
          this.putItemsInArray3(index, val);
        });
      });
      this.showAll = false;
      this.showLink = true;
      this.mainLink = false;
    });
  }

  setFavInt0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsInt0 = true;
  }

  setFavInt1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsInt1 = true;
  }

  setFavInt(item, index) {
    this.strgprvd.setFavs(item);
    this.isRestInFavsInt[index] = true;
  }

  showSports() {
    this.getdata.getRemoteData("http://alphanews.live/json/entertainment/75").then(data => {
      this.tempItem5 = data;
      this.sports0 = this.tempItem5[0];
      this.strgprvd.checkIfInfavs(this.sports0.nid).then(val => {
        this.isInFavsSports0 = val;
      });
      this.tempItem5.shift();
      this.sports1 = this.tempItem5[0];
      this.strgprvd.checkIfInfavs(this.sports1.nid).then(val => {
        this.isInFavsSports1 = val;
      });
      this.tempItem5.shift();
      this.items5 = this.tempItem5;
      this.items5.forEach((element, index) => {
        this.isInFavsRestSport(element.nid).then(val => {
          this.putItemsInArray4(index, val);
        });
      });
      this.showAll = false;
      this.showLink = true;
      this.mainLink = false;
    });
  }

  setFavSport0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsSports0 = true;
  }

  setFavSport1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsSports1 = true;
  }

  setFavSport(item, index) {
    this.strgprvd.setFavs(item);
    this.isRestInFavsSport[index] = true;
  }

  showAgain() {
    // this.showAll = true;
    // this.mainLink = true;
    // this.showLink = false;
    this.navCtrl.push("EntPage", { StorageData: "EntData", pageNo: 0 });
  }

  goToNextCat(e) {
    if (e.direction == 2) {
      this.navCtrl.push("BlogPage");
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
