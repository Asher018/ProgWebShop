import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, PERSISTENCE_SETTINGS, Query } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  getItems(): Observable<Item[]> {
    return this.firestore.collection("Items", ref => {
      return ref;
    }).valueChanges() as Observable<Item[]>;
  }

  getItemsQuery(minPrice: number, maxPrice: number): Observable<Item[]> {
    return this.firestore.collection("Items", ref => {
      let query: CollectionReference | Query = ref;
      console.log(minPrice, maxPrice)
      if (minPrice > 0 && maxPrice > 0) {
        console.log("itt ni")
        query = query.where('price', '<=', maxPrice);
        query = query.where('price', '>=', minPrice);
      }
      else if (maxPrice > 0) {
        query = query.where('price', '<=', maxPrice);

      }
      else if (minPrice > 0) {
        query = query.where('price', '>=', minPrice);
      }

      return query;
    }).valueChanges() as Observable<Item[]>;
  }

  test() {
    const storage = getStorage();
    const shirtref = ref(storage, 'shirts/shirt.png');
    getDownloadURL(shirtref)
      .then((url) => {
        const img = document.getElementById("test");
        img?.setAttribute('src', url);
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
