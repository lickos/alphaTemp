import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { EmailComposer } from "@ionic-native/email-composer";

@IonicPage()
@Component({
  selector: "page-report",
  templateUrl: "report.html"
})
export class ReportPage {
  name: string;
  tel: string;
  description: string;
  currentImage = null;
  constructor(private camera: Camera, private emailComposer: EmailComposer) {}

  captureImage() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.currentImage = imageData;
      },
      err => {
        // Handle error
        console.log("Image error: ", err);
      }
    );
  }

  takeAPic() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.currentImage = imageData;
      },
      err => {
        // Handle error
        console.log("Image error: ", err);
      }
    );
  }

  sendEmail() {
    let body =
      "ΟΝΟΜΑΤΕΠΩΝΥΜΟ: " + this.name + "\n" + "Αρ. Τηλεφώνου: " + this.tel + "\n" + "KEIMENO: " + this.description;
    console.log(body);
    let email = {
      to: "george.chios@gmail.com",
      attachments: [this.currentImage],
      subject: "Report from User",
      body: body,
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportPage");
  }
}
