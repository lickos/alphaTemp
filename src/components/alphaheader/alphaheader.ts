import { NavController } from "ionic-angular";
import { Component } from "@angular/core";

@Component({
  selector: "alphaheader",
  templateUrl: "alphaheader.html"
})
export class AlphaheaderComponent {
  constructor(public navCtrl: NavController) {}

  openHome() {
    this.navCtrl.push("HomePage");
  }

  openFavs() {
    this.navCtrl.push("FavoritesPage");
  }

  openSearch() {
    this.navCtrl.push("SearchPage");
  }
}
