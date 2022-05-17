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

  public cartItems$!: Observable<number[]>;
  items$!: Observable<Item[]>;
  cartItems!: number[];

  constructor(private dbService: DatabaseService, private fbservice: FirebaseService) { }


  ngOnInit(): void {


    
    this.cartItems$ = this.dbService.items$;

    this.cartItems$.subscribe(citems => {
      this.cartItems = [];
      console.log("subscribe: ",this.cartItems)
      for (let i = 0; i < citems.length; i++) {
        console.log("pushing")
        this.cartItems.push(Object.values(citems[i])[1])
      }
    })

    this.items$ = this.getItems();

  }

  ngOnDestroy() : void {
  }

  deleteFromCart(id:number) : void {
    this.dbService.deleteItem(id);
    console.log("delete from cart: ", this.cartItems);
  }

  testButton() : void {
    console.log("test button: ",this.cartItems)
  }

  getItems() : Observable<Item[]> {
    return this.fbservice.getItems().pipe(map(items => items.filter(item => {
      if(this.cartItems.includes(item.id)) {
        return true;
      }
      else {
        return false;
      }
    })))
  }


}
