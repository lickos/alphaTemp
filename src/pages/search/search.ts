import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  mySearch: string;
  finalString: Array<String>;
  data: any;
  isData: boolean = false;
  searchData: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataPrvd: GetdataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
  }
  searchIt() {
    if (this.mySearch.length > 0) {
      this.finalString = this.mySearch.split(" ");
      let url = "http://alphanews.live/json/solr/";
      for (let item of this.finalString) {
        if (item == this.finalString[this.finalString.length - 1]) {
          url += item;
        } else url += item + "+";
      }
      this.dataPrvd.getRemoteData(url).then(data => {
        if (data) {
          this.isData = true;
          this.searchData = data;
        }
      });
    }
  }
  remove(item) {
    for (let i = 0; i < this.searchData.length; i++) {
      if (this.searchData[i] == item) {
        this.searchData.splice(i, 1);
      }
    }
  }
  openArticle(item) {
    this.navCtrl.push("ArticlePage", { items: item });
  }
}
