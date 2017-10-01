import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-article",
  templateUrl: "article.html"
})
export class ArticlePage {
  items: any;
  el: HTMLElement;
  BadgeClass: any;
  isVideo: boolean = false;
  isInFavs0: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public strgprvd: StorageproviderProvider,
    public alert: AlertController,
    public storage: Storage
  ) {
    this.items = this.navParams.get("items");
    this.strgprvd.checkIfInfavs(this.items.nid).then(val => {
      this.isInFavs0 = val;
    });
    switch (this.items.category) {
      case "Κύπρος": {
        this.BadgeClass = "CyprusClass";
        break;
      }
      case "Διεθνή": {
        this.BadgeClass = "DiethniClass";
        break;
      }
      case "Πολιτική": {
        this.BadgeClass = "PolitikiClass";
        break;
      }
      case "Ελλάδα": {
        this.BadgeClass = "GreeceClass";
        break;
      }
      case "Οικονομία": {
        this.BadgeClass = "EconomyClass";
        break;
      }
      case "Αθλητικά": {
        this.BadgeClass = "SportsClass";
        break;
      }
      case "Υγεία": {
        this.BadgeClass = "HealthClass";
        break;
      }
      case "Ψυχαγωγεία": {
        this.BadgeClass = "EntertainmentClass";
        break;
      }
      default: {
        this.BadgeClass = "DefaultClass";
      }
    }
  }

  ionViewDidLoad() {
    this.el = document.getElementById("test");
    let artCont = this.items.content;
    let stringToCheck3 = "/sites";
    let var3 = new RegExp(stringToCheck3, "g");
    if (artCont.includes(stringToCheck3)) {
      artCont = artCont.replace(var3, "https://alphanews.live/sites");
    }
    this.el.innerHTML = artCont;
  }

  setFav0(item) {
    this.strgprvd.setFavs(item);
    this.isInFavs0 = true;
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
