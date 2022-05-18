import { Component, Input, OnInit } from '@angular/core';
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
    console.log("test button: ",this.cartItems$)
  }



}
