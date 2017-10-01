import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GetdataProvider } from "./../../providers/getdata/getdata";

@IonicPage()
@Component({
  selector: "page-tvnews",
  templateUrl: "tvnews.html"
})
export class TvnewsPage {
  tvNews1: any;
  tvNews2: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataprvd: GetdataProvider
  ) {}

  ionViewDidLoad() {
    this.dataprvd
      .getRemoteData("http://alphanews.live/json/tvcyprus")
      .then(data => {
        this.tvNews1 = data[0];
        this.tvNews2 = data[1];
        console.log(this.tvNews1);
        console.log(this.tvNews2);
      });
  }
}
