import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getItems(): Observable<Item[]> {
    return this.firestore.collection("Items", ref => {
      return ref;
    }).valueChanges() as Observable<Item[]>;
  }

  test() {
    const storage = getStorage();
    const shirtref = ref(storage, 'shirts/shirt.png');
    getDownloadURL(shirtref)
    .then((url) => {
      const img = document.getElementById("1");
      console.log(url)
      img?.setAttribute('src', url);
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
