import { Component, Input, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { Observable } from 'rxjs';
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
  }


  deleteFromCart(item:Item) : void {
    this.dbService.deleteItem(item);
  }

}
