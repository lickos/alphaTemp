import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    const browser = this.inAppBrowser.create('http://alphanews.live/blog','_self');
    browser.show();

  }

}
