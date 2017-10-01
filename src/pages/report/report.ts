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
  emailReport = {};
  currentImage = null;
  constructor(private camera: Camera, private emailComposer: EmailComposer) {}

  logForm() {
    console.log(this.emailReport);
  }

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
        console.log("Image error: ", err);
      }
    );
  }

  sendEmail() {
    let email = {
      to: "george.chios@gmail.com",
      attachments: [this.currentImage],
      subject: "My Cool Image",
      body: "Test Email",
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportPage");
  }
}
