import { Storage } from "@ionic/storage";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "../../providers/getdata/getdata";
import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  isInFavs0: boolean = false;
  isInFavs1: boolean = false;
  isInFavs2: boolean = false;
  isInFavs3: boolean = false;
  isInFavs4: boolean = false;
  isInFavs5: boolean = false;
  isInFavsEd: boolean = false;
  isInFavsCyp0: boolean = false;
  isInFavsCyp1: boolean = false;
  isInFavsPol0: boolean = false;
  isInFavsPol1: boolean = false;
  isInFavsSport0: boolean = false;
  isInFavsSport1: boolean = false;
  isInFavsGr0: boolean = false;
  isInFavsGr1: boolean = false;
  isInFavsEnt0: boolean = false;
  isInFavsEnt1: boolean = false;
  isInFavsInt0: boolean = false;
  isInFavsInt1: boolean = false;
  isInFavsHealth0: boolean = false;
  isInFavsHealth1: boolean = false;
  isInFavsEco0: boolean = false;
  isInFavsEco1: boolean = false;
  showCarouzel: boolean = true;
  showBreaking: boolean = false;
  breakingNews: any;
  editor: any;
  top0: any;
  top1: any;
  top2: any;
  top3: any;
  top4: any;
  top5: any;
  class0: any;
  class1: any;
  class2: any;
  class3: any;
  class4: any;
  class5: any;
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
  liveFeed: boolean = true;
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
    public storage: Storage,
    public strgprvd: StorageproviderProvider,
    public alert: AlertController
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
    this.getData.getRemoteData("https://alphanews.live/json/topnews").then(data => {
      this.top0 = data[0];
      let classType0 = data[0].category;
      let breaking = data[0].breaking;
      let brNid = data[0].nid;
      this.class0 = this.selectClass(classType0);
      if (breaking == "on") {
        this.showBreaking = true;
        this.showCarouzel = false;
        this.callBreaking(brNid);
      }
      this.strgprvd.checkIfInfavs(this.top0.nid).then(val => {
        this.isInFavs0 = val;
      });
      this.top1 = data[1];
      let classType1 = data[1].category;
      this.class1 = this.selectClass(classType1);
      this.strgprvd.checkIfInfavs(this.top1.nid).then(val => {
        this.isInFavs1 = val;
      });
      this.top2 = data[2];
      let classType2 = data[2].category;
      this.class2 = this.selectClass(classType2);
      this.strgprvd.checkIfInfavs(this.top2.nid).then(val => {
        this.isInFavs2 = val;
      });
      this.top3 = data[3];
      let classType3 = data[3].category;
      this.class3 = this.selectClass(classType3);
      this.strgprvd.checkIfInfavs(this.top3.nid).then(val => {
        this.isInFavs3 = val;
      });
      this.top4 = data[4];
      let classType4 = data[4].category;
      this.class4 = this.selectClass(classType4);
      this.strgprvd.checkIfInfavs(this.top4.nid).then(val => {
        this.isInFavs4 = val;
      });
      this.top5 = data[5];
      let classType5 = data[5].category;
      this.class5 = this.selectClass(classType5);
      this.strgprvd.checkIfInfavs(this.top5.nid).then(val => {
        this.isInFavs5 = val;
      });
    });
    this.getData.getRemoteData("http://alphanews.live/json/editorials").then(data => {
      this.editor = data[0];
      this.strgprvd.checkIfInfavs(this.editor.nid).then(val => {
        this.isInFavsEd = val;
      });
    });
    this.getData.getRemoteData("https://alphanews.live/json/cat/1").then(data => {
      this.CypData = data[0];
      this.CypData1 = data[1];
      this.CypData2 = data[2];
      this.pic0 = data[0].image_url;
      this.strgprvd.checkIfInfavs(this.CypData.nid).then(val => {
        this.isInFavsCyp0 = val;
      });
      this.strgprvd.checkIfInfavs(this.CypData1.nid).then(val => {
        this.isInFavsCyp1 = val;
      });
      this.storage.set("CypData", data).then(() => {
        console.log("Success Storage Cyp");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/2").then(data => {
      this.PolData = data[0];
      this.PolData1 = data[1];
      this.PolData2 = data[2];
      this.pic1 = data[0].image_url;
      this.strgprvd.checkIfInfavs(this.PolData.nid).then(val => {
        this.isInFavsPol0 = val;
      });
      this.strgprvd.checkIfInfavs(this.PolData1.nid).then(val => {
        this.isInFavsPol1 = val;
      });
      this.storage.set("PolData", data).then(() => {
        console.log("Success Storage Pol");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/6").then(data => {
      this.SportsData = data[0];
      this.SportsData1 = data[1];
      this.SportsData2 = data[2];
      this.pic2 = data[0].image_url;
      this.strgprvd.checkIfInfavs(this.SportsData.nid).then(val => {
        this.isInFavsSport0 = val;
      });
      this.strgprvd.checkIfInfavs(this.SportsData1.nid).then(val => {
        this.isInFavsSport1 = val;
      });
      this.storage.set("SportsData", data).then(() => {
        console.log("Success Storage Sports");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/7").then(data => {
      this.EntData = data[0];
      this.EntData1 = data[1];
      this.EntData2 = data[2];
      this.pic3 = data[0].image_url;
      this.strgprvd.checkIfInfavs(this.EntData.nid).then(val => {
        this.isInFavsEnt0 = val;
      });
      this.strgprvd.checkIfInfavs(this.EntData1.nid).then(val => {
        this.isInFavsEnt1 = val;
      });
      this.storage.set("EntData", data).then(() => {
        console.log("Success Storage Ent");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/5").then(data => {
      this.IntData = data[0];
      this.IntData1 = data[1];
      this.IntData2 = data[2];
      this.pic4 = data[0].image_url;
      this.strgprvd.checkIfInfavs(this.IntData.nid).then(val => {
        this.isInFavsInt0 = val;
      });
      this.strgprvd.checkIfInfavs(this.IntData1.nid).then(val => {
        this.isInFavsInt1 = val;
      });
      this.storage.set("IntData", data).then(() => {
        console.log("Success Storage Int");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/4").then(data => {
      this.GreeceData = data[0];
      this.GreeceData1 = data[1];
      this.strgprvd.checkIfInfavs(this.GreeceData.nid).then(val => {
        this.isInFavsGr0 = val;
      });
      this.strgprvd.checkIfInfavs(this.GreeceData1.nid).then(val => {
        this.isInFavsGr1 = val;
      });
      this.storage.set("GreeceData", data).then(() => {
        console.log("Success Storage Greece");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/8").then(data => {
      this.HealthData = data[0];
      this.HealthData1 = data[1];
      this.strgprvd.checkIfInfavs(this.HealthData.nid).then(val => {
        this.isInFavsHealth0 = val;
      });
      this.strgprvd.checkIfInfavs(this.HealthData1.nid).then(val => {
        this.isInFavsHealth1 = val;
      });
      this.storage.set("HealthData", data).then(() => {
        console.log("Success Health");
      });
    });
    this.getData.getRemoteData(" https://alphanews.live/json/cat/9").then(data => {
      this.EconomyData = data[0];
      this.EconomyData1 = data[1];
      this.strgprvd.checkIfInfavs(this.EconomyData.nid).then(val => {
        this.isInFavsEco0 = val;
      });
      this.strgprvd.checkIfInfavs(this.EconomyData1.nid).then(val => {
        this.isInFavsEco1 = val;
      });
      this.storage.set("EconomyData", data).then(() => {
        console.log("Success Economy");
      });
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

  setFav2(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs2 = true;
  }

  setFav3(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs3 = true;
  }

  setFav4(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs4 = true;
  }

  setFav5(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs5 = true;
  }

  setFavEd(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsEd = true;
  }

  setFavCyp0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsCyp0 = true;
  }

  setFavCyp1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsCyp1 = true;
  }

  setFavPol0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsPol0 = true;
  }

  setFavPol1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsPol1 = true;
  }

  setFavSport0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsSport0 = true;
  }

  setFavSport1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsSport1 = true;
  }

  setFavGr0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsGr0 = true;
  }

  setFavGr1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsGr1 = true;
  }

  setFavEnt0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsEnt0 = true;
  }

  setFavEnt1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsEnt1 = true;
  }

  setFavInt0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsInt0 = true;
  }

  setFavInt1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsInt1 = true;
  }

  setFavHealth0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsHealth0 = true;
  }

  setFavHealth1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsHealth1 = true;
  }

  setFavEco0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsEco0 = true;
  }

  setFavEco1(item) {
    this.strgprvd.setFavs(item);
    this.isInFavsEco1 = true;
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

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }

  callBreaking(brNid) {
    console.log(brNid);
    let brUrl = "http://alphanews.live/json/breaking/" + brNid;
    console.log(brUrl);
    this.getData.getRemoteData(brUrl).then(data => {
      console.log(data);
      this.breakingNews = data[0];
    });
  }

  goToNextCat(e) {
    if (e.direction == 2) {
      this.navCtrl.push("CyprusPage", { StorageData: "CyprusData", pageNo: 0 });
    } else if (e.direction == 4) {
      this.navCtrl.push("EntPage", { StorageData: "EntData" });
    }
  }

  selectClass(classType) {
    switch (classType) {
      case "Κύπρος": {
        return "CyprusClass";
      }
      case "Πολιτική": {
        return "PolitikiClass";
      }
      case "Διεθνή": {
        return "DiethniClass";
      }
      case "Ελλάδα": {
        return "GreeceClass";
      }
      case "Αθλητικά": {
        return "SportsClass";
      }
      case "Οικονομία": {
        return "EconomyClass";
      }
      case "Υγεία": {
        return "HealthClass";
      }
      case "Ψυχαγωγία": {
        return "EntertainmentClass";
      }
      default: {
        return "PolitikiClass";
      }
    }
  }
}
