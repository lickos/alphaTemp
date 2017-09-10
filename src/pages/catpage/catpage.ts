import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";
import { Slides } from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Content } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-catpage",
  templateUrl: "catpage.html"
})
export class CatpagePage {
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  url: string = "https://alphanews.live/json/";
  catNo: string;
  page: string = "0";
  finUrl: string;
  items: any;
  storageData: string;
  badgeClass: string;
  pic0: string = "assets/img/logo.svg";
  pic1: string = "assets/img/logo.svg";
  pic2: string = "assets/img/logo.svg";
  pic3: string = "assets/img/logo.svg";
  pic4: string = "assets/img/logo.svg";
  pic5: string = "assets/img/logo.svg";
  pic6: string = "assets/img/logo.svg";
  pic7: string = "assets/img/logo.svg";
  pic8: string = "assets/img/logo.svg";
  pic9: string = "assets/img/logo.svg";
  image0: any;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  stData: any;
  catId: string;
  tempData: any;
  titleColor: string;
  urlTemp: string;
  catIdTemp: any;
  nextCatId: string;
  showSubmenu: boolean = false;
  storageArray: any;
  isInFavs0: any = false;
  isInFavs1: any = false;
  isInFavs2: any = false;
  isInFavs3: any = false;
  isInFavs4: any = false;
  isInFavs5: any = false;
  isInFavs6: any = false;
  isInFavs7: any = false;
  isInFavs8: any = false;
  isInFavs9: any = false;
  catType: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider,
    public strgPrvd: StorageproviderProvider,
    public alert: AlertController,
    public storage: Storage
  ) {
    this.catId = this.navParams.get("CatId");
    this.catType = this.navParams.get("type");
  }

  ionViewDidLoad() {
    this.storage.get(this.navParams.get("StorageData")).then(data => {
      this.image0 = data[0];
      this.storage.set("CypData", data);
      this.image1 = data[1];
      this.image2 = data[2];
      this.image3 = data[3];
      this.image4 = data[4];
      this.image5 = data[5];
      this.image6 = data[6];
      this.image7 = data[7];
      this.image8 = data[8];
      this.image9 = data[9];
      this.items = data;

      this.strgPrvd.checkIfInfavs(data[0].nid).then(val => {
        this.isInFavs0 = val;
      });
      this.strgPrvd.checkIfInfavs(data[1].nid).then(val => {
        this.isInFavs1 = val;
      });
      this.strgPrvd.checkIfInfavs(data[2].nid).then(val => {
        this.isInFavs2 = val;
      });
      this.strgPrvd.checkIfInfavs(data[3].nid).then(val => {
        this.isInFavs3 = val;
      });
      this.strgPrvd.checkIfInfavs(data[4].nid).then(val => {
        this.isInFavs4 = val;
      });
      this.strgPrvd.checkIfInfavs(data[5].nid).then(val => {
        this.isInFavs5 = val;
      });
      this.strgPrvd.checkIfInfavs(data[6].nid).then(val => {
        this.isInFavs6 = val;
      });
      this.strgPrvd.checkIfInfavs(data[7].nid).then(val => {
        this.isInFavs7 = val;
      });
      this.strgPrvd.checkIfInfavs(data[8].nid).then(val => {
        this.isInFavs8 = val;
      });
      this.strgPrvd.checkIfInfavs(data[9].nid).then(val => {
        this.isInFavs9 = val;
      });
      switch (this.image0.category) {
        case "Κύπρος":
          this.badgeClass = "CyprusClass";
          this.titleColor = "CyprusColor";
          this.catNo = "1";
          this.storageData = "CypData";
          break;
        case "Πολιτική":
          this.badgeClass = "PolitikiClass";
          this.titleColor = "PolitikiColor";
          this.catNo = "2";
          this.storageData = "PolData";
          break;
        case "Ελλάδα":
          this.badgeClass = "GreeceClass";
          this.titleColor = "GreeceColor";
          this.catNo = "4";
          this.storageData = "GreeceData";
          break;
        case "Διεθνή":
          this.badgeClass = "DiethniClass";
          this.titleColor = "DiethniColor";
          this.catNo = "5";
          this.storageData = "IntData";
          break;
        case "Αθλητικά":
          this.badgeClass = "SportsClass";
          this.titleColor = "SportsColor";
          this.catNo = "6";
          this.storageData = "SportsData";
          break;
        case "Ψυχαγωγία":
          this.badgeClass = "EntertainmentClass";
          this.titleColor = "EntertainmentColor";
          this.catNo = "7";
          this.storageData = "EntData";
          break;
        case "Υγεία":
          this.badgeClass = "HealthClass";
          this.titleColor = "HealthColor";
          this.catNo = "8";
          this.storageData = "HealthData";
          break;
        case "Οικονομία":
          this.badgeClass = "EconomyClass";
          this.titleColor = "EconomyColor";
          this.catNo = "9";
          this.storageData = "EconomyData";
          break;
        default:
          this.badgeClass = "DefaultClass";
          this.titleColor = "DefColor";
      }
    });
  }

  ionViewDidEnter() {
    this.finUrl = this.url + this.catType + this.catNo + "?page=" + this.page;
    this.getdata.getRemoteData(this.finUrl).then(data => {
      this.image0 = data[0];
      this.pic0 = data[0].image_url;
      console.log(this.pic0);
      this.image1 = data[1];
      this.pic1 = data[1].image_url;
      console.log(this.pic1);
      this.image2 = data[2];
      this.pic2 = data[2].image_url;
      this.image3 = data[3];
      this.pic3 = data[3].image_url;
      this.image4 = data[4];
      this.pic4 = data[4].image_url;
      this.image5 = data[5];
      this.pic5 = data[5].image_url;
      this.image6 = data[6];
      this.pic6 = data[6].image_url;
      this.image7 = data[7];
      this.pic7 = data[7].image_url;
      this.image8 = data[8];
      this.pic8 = data[8].image_url;
      this.image9 = data[9];
      this.pic9 = data[9].image_url;
      this.items = data;
      this.storage.set(this.storageData, data).then(() => {
        console.log("Success " + this.storageData);
      });
    });
  }

  goToNextCat(e) {
    this.storageArray = [
      "CypData",
      "PolData",
      "",
      "GreeceData",
      "IntData",
      "SportsData",
      "EntData",
      "HealthData",
      "EconomyData"
    ];
    if (e.direction == 2) {
      if (this.catId != "9") {
        this.catIdTemp = parseInt(this.catId);
        if (this.catIdTemp == 2) {
          this.catIdTemp += 2;
        } else this.catIdTemp += 1;
        this.stData = this.storageArray[this.catIdTemp - 1];
        this.nextCatId = this.catIdTemp.toString();
        this.catId = this.nextCatId;
        this.navCtrl.push(CatpagePage, {
          StorageData: this.stData,
          CatId: this.nextCatId
        });
      } else
        this.navCtrl.push(CatpagePage, { StorageData: "CypData", CatId: "1" });
    } else if (e.direction == 4) {
      if (this.catId != "1") {
        this.catIdTemp = parseInt(this.catId);
        if (this.catIdTemp == 4) {
          this.catIdTemp -= 2;
        } else this.catIdTemp -= 1;
        this.stData = this.storageArray[this.catIdTemp - 1];
        this.nextCatId = this.catIdTemp.toString();
        this.catId = this.nextCatId;
        this.navCtrl.push(CatpagePage, {
          StorageData: this.stData,
          CatId: this.nextCatId
        });
      } else
        this.navCtrl.push(CatpagePage, {
          StorageData: "EconomyData",
          catId: "9"
        });
    }
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }

  openSubMenu() {
    this.showSubmenu = !this.showSubmenu;
    this.content.scrollToBottom;
  }

  setFav0(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs0 = true;
  }

  setFav1(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs1 = true;
  }

  setFav3(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs3 = true;
  }

  setFav4(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs4 = true;
  }

  setFav5(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs5 = true;
  }

  setFav6(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs6 = true;
  }

  setFav7(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs7 = true;
  }

  setFav8(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs8 = true;
  }

  setFav9(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs9 = true;
  }

  setFav2(item) {
    this.strgPrvd.setFavs(item);
    this.isInFavs2 = true;
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
