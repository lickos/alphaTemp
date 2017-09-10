import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ToastController } from 'ionic-angular';

@Injectable()
export class GetdataProvider {
  data: any;
  cypData: any;
  PolData:any;
  constructor(public http: Http, private toastCtrl: ToastController) {}

  getRemoteData(url) {
    return new Promise(resolve => {
      this.http.get(url).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      },
    Error=>{
      this.presentToast();
    })
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Η Ενημέρωση απέτυχε. Παρακαλώ ελέγξτε τη σύνδεση σας',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


  setCypData(data) {
    this.cypData = data;
  }
  getCypData() {
    return this.cypData;
  }

  setPolData(data) {
    this.PolData = data;
  }
  getPolData() {
    return this.PolData;
  }
}
