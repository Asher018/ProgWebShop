import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [
    SearchService
  ]
})



export class CardComponent implements OnInit {

  maxPrice!: number;
  
  items:Observable<Item[]> | undefined;

  constructor(private fbservice:FirebaseService, private search:SearchService) { }

  ngOnInit(): void {
    this.search.setMaxPrice(5000);
    console.log(this.search.getMaxPrice())
    this.items = this.fbservice.getItems().pipe(
      map(items => items.filter(item => item.price < this.maxPrice))
    );
    this.fbservice.test();
  }

  toCart():void {
    console.log("ToCard")

  }
}
