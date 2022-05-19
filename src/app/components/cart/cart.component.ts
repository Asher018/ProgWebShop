import { Component, Input, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { filter, first, map, mergeMap, Observable, Subject, Subscriber, Subscription, withLatestFrom } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems$!: Observable<Item[]>;
  items$!: Observable<Item[]>;

  constructor(private dbService: DatabaseService, private fbservice: FirebaseService) { }


  ngOnInit(): void {

    this.cartItems$ = this.dbService.items$;
    console.log(this.cartItems$)
  }



  deleteFromCart(item:Item) : void {
    this.dbService.deleteItem(item);
  }

  testButton() : void {
    const storage = getStorage();
    getDownloadURL(ref(storage, 'shirts/ing.jpg'))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch((error) => {
        console.log("WHAT IS THIS ERROR LOL")
      });
  }



}
