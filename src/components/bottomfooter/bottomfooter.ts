import { NavController } from 'ionic-angular';
import { Component } from "@angular/core";

/**
 * Generated class for the BottomfooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: "bottomfooter",
  templateUrl: "bottomfooter.html"
})
export class BottomfooterComponent {
  showbottom: boolean = false;
  showUp: boolean = true;
  showDown: boolean = false;

  constructor(public navCtrl: NavController) {}

  showthis() {
    this.showbottom = !this.showbottom;
    this.showUp = !this.showUp;
    this.showDown = !this.showDown;
  }

  openUseful() {
    this.navCtrl.push('UsefulPage')
  }
}

