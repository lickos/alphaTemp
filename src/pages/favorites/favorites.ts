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
  pic: string = "assets/img/icon.png";
  searchTerm: string;

  constructor(
    public navCtrl: NavController,
    public strgprvd: StorageproviderProvider,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.strgprvd.getFavs().then(data => {
      if (data) {
        this.items = data;
        this.pic = this.items.image_url;
      }
    });
  }

  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
