import { Storage } from "@ionic/storage";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  catsToDisplay: any;
  Cyp: boolean;
  CypData: any;
  CypData1: any;
  CypData2: any;
  Pol: boolean;
  PolData: any;
  PolData1: any;
  PolData2: any;
  Sports: boolean;
  SportsData: any;
  SportsData1: any;
  SportsData2: any;
  Ent: boolean;
  EntData: any;
  EntData1: any;
  EntData2: any;
  Int: boolean;
  IntData: any;
  IntData1: any;
  IntData2: any;
  Greece: boolean;
  GreeceData: any;
  GreeceData1: any;
  Health: boolean;
  HealthData: any;
  HealthData1: any;
  Economy: boolean;
  EconomyData: any;
  EconomyData1: any;
  badgeClass: string;
  pic0: string = "assets/img/temp.png";
  pic1: string = "assets/img/temp.png";
  pic2: string = "assets/img/temp.png";
  pic3: string = "assets/img/temp.png";
  pic4: string = "assets/img/temp.png";
  backImage: string = "http://alphanews.live/sites/default/files/styles/media_image/public/2017-08/20631418_10213406715825402_2006238752_n.png?itok=bD437OY-";

  constructor(
    public navCtrl: NavController,
    public getData: GetdataProvider,
    public navParams: NavParams,
    public storage: Storage
  ) {
    this.storage.get("CategoriesArray").then(data => {
      if (data) {
        this.catsToDisplay = data;
        this.Cyp = this.catsToDisplay[0];
        this.Pol = this.catsToDisplay[1];
        this.Greece = this.catsToDisplay[2];
        this.Int = this.catsToDisplay[3];
        this.Sports = this.catsToDisplay[4];
        this.Economy = this.catsToDisplay[5];
        this.Health = this.catsToDisplay[6];
        this.Ent = this.catsToDisplay[7];
      }
    });
    this.storage.get("CypData").then(data => {
      if (data != null) {
        this.CypData = data[0];
        this.CypData1 = data[1];
        this.CypData2 = data[2];
      }
    });
    this.storage.get("PolData").then(data => {
      if (data != null) {
        this.PolData = data[0];
        this.PolData1 = data[1];
        this.PolData2 = data[2];
      }
    });
    this.storage.get("SportsData").then(data => {
      if (data != null) {
        this.SportsData = data[0];
        this.SportsData1 = data[1];
        this.SportsData2 = data[2];
      }
    });
    this.storage.get("EntData").then(data => {
      if (data != null) {
        this.EntData = data[0];
        this.EntData1 = data[1];
        this.EntData2 = data[2];
      }
    });
    this.storage.get("IntData").then(data => {
      if (data != null) {
        this.IntData = data[0];
        this.IntData1 = data[1];
        this.IntData2 = data[2];
      }
    });
    this.storage.get("GreeceData").then(data => {
      if (data != null) {
        this.GreeceData = data[0];
        this.GreeceData1 = data[1];
      }
    });
    this.storage.get("HealthData").then(data => {
      if (data != null) {
        this.HealthData = data[0];
        this.HealthData1 = data[1];
      }
    });
    this.storage.get("EconomyData").then(data => {
      if (data != null) {
        this.EconomyData = data[0];
        this.EconomyData1 = data[1];
      }
    });
  }

  ionViewDidLoad() {
    this.getData.getRemoteData(" https://alphanews.live/json/cat/1").then(data => {
      this.CypData = data[0];
      this.CypData1 = data[1];
      this.CypData2 = data[2];
      this.pic0 = data[0].image_url;
      this.storage.set("CypData", data).then(() => {
        console.log("Success Storage Cyp");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/2").then(data => {
      this.PolData = data[0];
      this.PolData1 = data[1];
      this.PolData2 = data[2];
      this.pic1 = data[0].image_url;
      this.storage.set("PolData", data).then(() => {
        console.log("Success Storage Pol");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/6").then(data => {
      this.SportsData = data[0];
      this.SportsData1 = data[1];
      this.SportsData2 = data[2];
      this.pic2 = data[0].image_url;
      this.storage.set("SportsData", data).then(() => {
        console.log("Success Storage Sports");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/7").then(data => {
      this.EntData = data[0];
      this.EntData1 = data[1];
      this.EntData2 = data[2];
      this.pic3 = data[0].image_url;
      this.storage.set("EntData", data).then(() => {
        console.log("Success Storage Ent");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/5").then(data => {
      this.IntData = data[0];
      this.IntData1 = data[1];
      this.IntData2 = data[2];
      this.pic4 = data[0].image_url;
      this.storage.set("IntData", data).then(() => {
        console.log("Success Storage Int");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/4").then(data => {
      this.GreeceData = data[0];
      this.GreeceData1 = data[1];
      this.storage.set("GreeceData", data).then(() => {
        console.log("Success Storage Greece");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/8").then(data => {
      this.HealthData = data[0];
      this.HealthData1 = data[1];
      this.storage.set("HealthData", data).then(() => {
        console.log("Success Health");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/9").then(data => {
      this.EconomyData = data[0];
      this.EconomyData1 = data[1];
      this.storage.set("EconomyData", data).then(() => {
        console.log("Success Economy");
      });
    });
  }
  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }
}
