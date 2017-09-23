import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageproviderProvider {
  items: any;
  favs: any;
  testArray: any;
  cats: any;
  newFavs: any;
  TempArray = [true, true, true, true, true, true, true, true];

  constructor(private storage: Storage) {
    console.log(this.storage);
  }

  setFavs(item) {
    this.storage.get("favs").then(data => {
      this.items = data;
      console.log(this.items);
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
        resolve(this.cats);
      });
    });
  }

  updateCats(newArray) {
    this.storage.set("CategoriesArray", newArray);
  }

  removeFav(id) {
    return new Promise(resolve => {
      this.storage.get("favs").then(data => {
        this.newFavs = data;
        for (let fav of this.newFavs) {
          if (fav.nid == id) {
            let num = this.newFavs.indexOf(fav);
            this.newFavs.splice(num, 1);
            this.storage.set("favs", this.newFavs).then(data => {});
          }
        }
      });
    });
  }
}
