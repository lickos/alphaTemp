import { GetdataProvider } from './../../providers/getdata/getdata';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-temphome',
  templateUrl: 'temphome.html',
})
export class TemphomePage {
  CypData: any;
  CypData1: any;
  CypData2: any;
  PolData: any;
  PolData1: any;
  PolData2:any;
  SportsData: any;
  SportsData1: any;
  SportsData2:any;
  EntData: any;
  EntData1: any;
  EntData2: any;
  IntData: any;
  IntData1: any;
  IntData2: any;


  constructor(public navCtrl: NavController, public getData: GetdataProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('CypData').then((data)=>{
      if(data == null) {
        console.log("OK");
      } else this.initUi()
    });
  }

  openArticle(item){
    this.navCtrl.push("ArticlePage", {items:item})
  }

  initUi(){
    this.storage.get('CypData').then((data)=>{
      this.CypData = data[0];
      this.CypData1 = data[1];
      this.CypData2 = data[2];
    });
    this.storage.get('PolData').then((data)=>{
      this.PolData = data[0];
      this.PolData1 = data[1];
      this.PolData2 = data[2];
    });
    this.storage.get('SportsData').then((data)=>{
      this.SportsData = data[0];
      this.SportsData1 = data[1];
      this.SportsData2 = data[2];
    });
    this.storage.get('EntData').then((data)=>{
      this.EntData = data[0];
      this.EntData1 = data[1];
      this.EntData2 = data[2];
    });
    this.storage.get('IntData').then((data)=>{
      this.IntData = data[0];
      this.IntData1 = data[1];
      this.IntData2 = data[2];
    });
  }

  ionViewDidEnter(){
    this.getData
    .getRemoteData("https://alphanews.live/json/cat/1")
    .then(data => {
      this.storage.set('CypData', data);
    });
  this.getData
    .getRemoteData("https://alphanews.live/json/cat/2")
    .then(data => {
      this.storage.set('PolData', data);
    });
  this.getData
    .getRemoteData("https://alphanews.live/json/cat/6")
    .then(data => {
      this.storage.set('SportsData', data);
    });
  this.getData
    .getRemoteData("https://alphanews.live/json/cat/7")
    .then(data => {
      this.storage.set('EntData', data);
    });
  this.getData
    .getRemoteData("https://alphanews.live/json/cat/5")
    .then(data => {
      this.storage.set('IntData', data);
      this.navCtrl.push("HomePage");
    });
  }
}

