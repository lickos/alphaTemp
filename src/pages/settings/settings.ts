import { StorageproviderProvider } from "./../../providers/storageprovider/storageprovider";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  Cyprus: boolean;
  Politiki: boolean;
  Greece: boolean;
  Diethni: boolean;
  Sports: boolean;
  Economy: boolean;
  Health: boolean;
  Entertainment: boolean;
  arrayCats: any;
  page: string = "PageSettings";

  constructor(
    public navCtrl: NavController,
    public storageProvider: StorageproviderProvider,
    public navParams: NavParams
  ) {
    this.storageProvider.setCats();
  }

  ionViewDidLoad() {
    this.storageProvider.getCats().then(data => {
      this.arrayCats = data;
      this.Cyprus = this.arrayCats[0];
      this.Politiki = this.arrayCats[1];
      this.Greece = this.arrayCats[2];
      this.Diethni = this.arrayCats[3];
      this.Sports = this.arrayCats[4];
      this.Economy = this.arrayCats[5];
      this.Health = this.arrayCats[6];
      this.Entertainment = this.arrayCats[7];
      console.log(this.arrayCats);
    });
  }

  updateArray() {
    this.arrayCats[0] = this.Cyprus;
    this.arrayCats[1] = this.Politiki;
    this.arrayCats[2] = this.Greece;
    this.arrayCats[3] = this.Diethni;
    this.arrayCats[4] = this.Sports;
    this.arrayCats[5] = this.Economy;
    this.arrayCats[6] = this.Health;
    this.arrayCats[7] = this.Entertainment;
    this.storageProvider.updateCats(this.arrayCats);
  }
}
