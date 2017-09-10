import { GetdataProvider } from "./../../providers/getdata/getdata";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-cyprus",
  templateUrl: "cyprus.html"
})
export class CyprusPage {
  page: string = "cyprusAll";
  items0: any;
  items1: any;
  items2: any;
  items3: any;
  items4: any;
  items5: any;
  items6: any;
  items7: any;
  items8: any;
  items9: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata: GetdataProvider
  ) {}

  ionViewDidLoad() {}

  ionViewDidEnter() {
    this.getdata
      .getRemoteData("https://alphanews.live/json/cat/1")
      .then(data => {
        this.items0 = data[0];
        this.items1 = data[1];
        this.items2 = data[2];
        this.items3 = data[3];
        this.items4 = data[4];
        this.items5 = data[5];
        this.items6 = data[6];
        this.items7 = data[7];
        this.items8 = data[8];
        this.items9 = data[9];
      });
  }
}
