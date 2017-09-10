import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  items: any;
  el: HTMLElement;
  BadgeClass: any;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get('items');
    switch (this.items.category) {
      case 'Κύπρος': {
        this.BadgeClass = 'CyprusClass';
        break;
      }
      case 'Διεθνή': {
        this.BadgeClass = 'DiethniClass';
        break;
      }
      case 'Πολιτική': {
        this.BadgeClass = 'PolitikiClass';
        break;
      }
      case 'Ελλάδα': {
        this.BadgeClass = 'GreeceClass';
        break;
      }
      case 'Οικονομία': {
        this.BadgeClass = 'EconomyClass';
        break;
      }
      case 'Αθλητικά': {
        this.BadgeClass = 'SportsClass';
        break;
      }
      case 'Υγεία': {
        this.BadgeClass = 'HealthClass';
        break;
      }
      case 'Ψυχαγωγεία': {
        this.BadgeClass = 'EntertainmentClass';
        break;
      }
      default: {
        this.BadgeClass = 'DefaultClass';
      }
    }
  }

  ionViewDidLoad() {
    console.log(this.items);
    this.el = document.getElementById('test');
    let newArt = '';
    let finalArt = '';
    let artCont = this.items.content;
    let stringToCheck1 = 'width="854"';
    let stringToCheck2 = 'height="480"';
    let stringToCheck3 = 'src="/sites';
    let var3 = new RegExp(stringToCheck3, 'g');
    if (artCont.includes(stringToCheck1)) {
      console.log('1');
      newArt = artCont.replace(stringToCheck1, 'width="100%"');
      finalArt = newArt.replace(stringToCheck2, 'height="auto"');
      if (finalArt.includes(stringToCheck3)) {
        console.log('2');
        let finalArtWithPic = finalArt.replace(stringToCheck3, 'src="https://alphanews.live/sites');
        this.el.innerHTML = finalArtWithPic;
      } else {
        console.log('3');
        this.el.innerHTML = finalArt;
      }
    } else if (artCont.includes(stringToCheck3)) {
      console.log('3');
      let artContWithPic = artCont.replace(var3, 'src="https://alphanews.live/sites');
      console.log(artContWithPic);
      this.el.innerHTML = artContWithPic;
    } else {
      this.el.innerHTML = artCont;
    }
  }
}
