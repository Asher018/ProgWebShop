import { Component, OnInit } from '@angular/core';
import { filter, last, map, Observable, Subscriber } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})



export class CardComponent implements OnInit {

  
  items!:Observable<Item[]>;

  constructor(private fbservice:FirebaseService, private dbService: DatabaseService) {
  }

  ngOnInit(): void {
    this.items = this.fbservice.getItems().pipe(
      map(items => items.filter(item => item.price > 0))
    );

    this.fbservice.test();
  }

  async toCart(id:number): Promise<void> {
    console.log(id)
    this.dbService.addItem(id);
    console.log("ToCard");
  }
}


