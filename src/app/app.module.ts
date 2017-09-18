import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";

import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { Geolocation } from "@ionic-native/geolocation";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { IonicStorageModule } from "@ionic/storage";
import { GetdataProvider } from "../providers/getdata/getdata";
import { StorageproviderProvider } from "../providers/storageprovider/storageprovider";

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule, IonicStorageModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    Geolocation,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GetdataProvider,
    StorageproviderProvider
  ]
})
export class AppModule {}
