import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  items: any;
  initItems: any;
  pic: string = "assets/img/icon.png";
  searchTerm: string;
  title: any;

  constructor(public navCtrl: NavController, public strgprvd: StorageproviderProvider, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.initializeArray();
  }

  initializeArray() {
    this.strgprvd.getFavs().then(data => {
      if (data) {
        this.items = data;
        this.pic = this.items.image_url;
        this.initItems = data;
      }
    });
  }

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }

  getItems(ev: any) {
    this.items = this.initItems;
    // this.initializeArray();
    let val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      console.log(val);
      this.items = this.items.filter(item => {
        return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  removeFromFavs(id, i) {
    this.items.splice(i, 1);
    this.strgprvd.removeFav(id).then(() => {
      console.log("OK");
    });
  }
}
