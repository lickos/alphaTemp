import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-article",
  templateUrl: "article.html"
})
export class ArticlePage {
  items: any;
  el: HTMLElement;
  BadgeClass: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get("items");
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
    let stringToCheck1 = 'width="854"';
    let stringToCheck2 = 'height="480"';
    let stringToCheckOther = 'height="478"';
    let var1 = new RegExp(stringToCheckOther, "g");
    let var2 = new RegExp(stringToCheck1, "g");
    let var4 = new RegExp(stringToCheck2, "g");
    let stringToCheck3 = "/sites";
    let var3 = new RegExp(stringToCheck3, "g");
    if (artCont.includes(stringToCheck2)) {
      artCont = artCont.replace(var2, 'width="100%"');
    }
    if (artCont.includes(stringToCheck2)) {
      artCont = artCont.replace(var4, 'height="auto"');
    }
    if (artCont.includes(stringToCheck3)) {
      artCont = artCont.replace(var3, "https://alphanews.live/sites");
    }
    if (artCont.includes(stringToCheckOther)) {
      console.log("Into Other");
      artCont = artCont.replace(var1, 'height="auto"');
    }
    console.log(artCont);
    this.el.innerHTML = artCont;
  }
}
