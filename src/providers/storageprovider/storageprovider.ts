import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageproviderProvider {
  items: any;
  favs: any;
  testArray: any;
  cats: any;
  TempArray = [true, true, true, true, true, true, true, true];

  constructor(private storage: Storage) {}

  setFavs(item) {
    this.storage.get("favs").then(data => {
      this.items = data;
      if (data) {
        this.items.push(item);
        this.storage.set("favs", this.items);
      } else {
        let arr = [];
        arr.push(item);
        this.storage.set("favs", arr);
      }
    });
  }
  getFavs() {
    return new Promise(resolve => {
      this.storage.get("favs").then(data => {
        this.favs = data;
        console.log(this.favs);
        resolve(this.favs);
      });
    });
  }

  checkIfInfavs(artId: string): Promise<boolean> {
    return new Promise(resolve => {
      this.storage.get("favs").then(data => {
        if (data && this.checkArray(artId, data)) {
          resolve(true);
        } else resolve(false);
      });
    });
  }

  checkArray(item, array) {
    for (let items of array) {
      if (items.nid == item) {
        return true;
      }
    }
    return false;
  }

  setCats() {
    this.storage.get("CategoriesArray").then(data => {
      console.log(data);
      if (data == null || data == undefined) {
        this.storage.set("CategoriesArray", this.TempArray);
        this.storage;
      }
    });
  }

  getCats() {
    return new Promise(resolve => {
      this.storage.get("CategoriesArray").then(data => {
        this.cats = data;
        console.log(this.cats);
        resolve(this.cats);
      });
    });
  }

  updateCats(newArray) {
    this.storage.set("CategoriesArray", newArray);
  }
}
