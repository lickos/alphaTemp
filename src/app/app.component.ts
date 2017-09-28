import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { GetdataProvider } from "../providers/getdata/getdata";
import { MenuController } from "ionic-angular";
import { StorageproviderProvider } from "../providers/storageprovider/storageprovider";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "HomePage";
  showMeCyp: boolean = false;
  showMePol: boolean = false;
  showMeSports: boolean = false;
  showMeHealth: boolean = false;
  showMeEnt: boolean = false;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    private oneSignal: OneSignal,
    public splashScreen: SplashScreen,
    public getData: GetdataProvider,
    public menuCtrl: MenuController,
    public strgPrvd: StorageproviderProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.oneSignal.startInit("61b6d88e-c018-41b1-9fa6-4a1a01b0336d", "221135394305");
      this.oneSignal.endInit();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.strgPrvd.setCats();
    });
  }

  expandCyp() {
    this.showMeCyp = !this.showMeCyp;
  }

  openCyp() {
    this.nav.push("CyprusPage", { StorageData: "CypData", pageNo: 0 });
    this.menuCtrl.close();
  }

  openPol() {
    this.nav.push("PolitikiPage", { StorageData: "PolData", pageNo: 0 });
    this.menuCtrl.close();
  }

  openKipriako() {
    this.nav.push("PolitikiPage", {
      StorageData: "PolData",
      showAll: false,
      cypriakoPage: true
    });
    this.showMePol = !this.showMePol;
    this.menuCtrl.close();
  }

  openEnergeia() {
    this.nav.push("PolitikiPage", {
      StorageData: "PolData",
      showAll: false,
      energeia: true
    });
    this.showMePol = !this.showMePol;
    this.menuCtrl.close();
  }

  expandPol() {
    this.showMePol = !this.showMePol;
  }

  expandSports() {
    this.showMeSports = !this.showMeSports;
  }

  openSports() {
    this.nav.push("SportsPage", { StorageData: "SportsData", showAll: true });
    this.menuCtrl.close();
  }

  expandHealth() {
    this.showMeHealth = !this.showMeHealth;
  }

  openHealth() {
    this.nav.push("HealthPage", { StorageData: "HealthData" });
    this.menuCtrl.close();
  }

  expandEnt() {
    this.showMeEnt = !this.showMeEnt;
  }

  openEnt() {
    this.nav.push("EntPage", { StorageData: "EntData" });
    this.menuCtrl.close();
  }

  openGreece() {
    this.nav.push("GreecePage", { StorageData: "GreeceData" });
    this.menuCtrl.close();
  }

  openInt() {
    this.nav.push("IntPage", { StorageData: "IntData" });
  }

  openEconomy() {
    this.nav.push("OikonomiaPage", { StorageData: "EconomyData" });
    this.menuCtrl.close();
  }

  openBlog() {
    this.nav.push("BlogPage");
    this.menuCtrl.close();
  }

  openSettings() {
    this.nav.push("SettingsPage");
    this.menuCtrl.close();
  }

  openTemp() {
    this.nav.push("TemphomePage");
    this.menuCtrl.close();
  }

  neaAgoras() {
    this.nav.push("CyprusPage", {
      StorageData: "CypData",
      showAll: false,
      neaAgorasPage: true
    });
    this.showMeCyp = !this.showMeCyp;
  }

  openUseful() {
    this.nav.push("UsefulPage");
    this.menuCtrl.close();
  }

  openKypriakoProtathlima() {
    this.nav.push("SportsPage", {
      StorageData: "SportsData",
      showAll: false,
      cypChampion: true
    });
    this.showMeSports = !this.showMeSports;
    this.menuCtrl.close();
  }

  openEllinikoProtathlima() {
    this.nav.push("SportsPage", {
      StorageData: "SportsData",
      showAll: false,
      grChampion: true
    });
    this.showMeSports = !this.showMeSports;
    this.menuCtrl.close();
  }

  openDiethniProtathlimata() {
    this.nav.push("SportsPage", {
      StorageData: "SportsData",
      showAll: false,
      intChampion: true
    });
    this.showMeSports = !this.showMeSports;
    this.menuCtrl.close();
  }

  openAthlitismos() {
    this.nav.push("SportsPage", {
      StorageData: "SportsData",
      showAll: false,
      athlitismos: true
    });
    this.showMeSports = !this.showMeSports;
    this.menuCtrl.close();
  }

  openHomePage() {
    this.nav.push("HomePage");
    this.menuCtrl.close();
  }

  openLouis() {
    this.nav.push("LouisPage");
    this.menuCtrl.close();
  }

  openFitness() {
    this.nav.push("HealthPage", {
      StorageData: "HealthData",
      showAll: false,
      Cypriako: true
    });
    this.showMeHealth = !this.showMeHealth;
    this.menuCtrl.close();
  }

  openPsych() {
    this.nav.push("HealthPage", {
      StorageData: "HealthData",
      showAll: false,
      Psych: true
    });
    this.showMeHealth = !this.showMeHealth;
    this.menuCtrl.close();
  }

  openProtaseis() {
    this.nav.push("EntPage", {
      StorageData: "EntData",
      showAll: false,
      Cypriako: true
    });
    this.showMeEnt = !this.showMeEnt;
    this.menuCtrl.close();
  }

  openShowBiz() {
    this.nav.push("EntPage", {
      StorageData: "EntData",
      showAll: false,
      greek: true
    });
    this.showMeEnt = !this.showMeEnt;
    this.menuCtrl.close();
  }

  opensinentefxeis() {
    this.nav.push("EntPage", {
      StorageData: "EntData",
      showAll: false,
      intSports: true
    });
    this.showMeEnt = !this.showMeEnt;
    this.menuCtrl.close();
  }

  openKitchen() {
    this.nav.push("EntPage", {
      StorageData: "EntData",
      showAll: false,
      otherSports: true
    });
    this.showMeEnt = !this.showMeEnt;
    this.menuCtrl.close();
  }

  openReport() {
    this.nav.push("ReportPage");
    this.menuCtrl.close();
  }
}
