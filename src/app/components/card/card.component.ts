import { Component, Input, OnInit } from '@angular/core';
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

  
  @Input() items$!:Observable<Item[]>;

  constructor(private fbservice:FirebaseService, private dbService: DatabaseService) {
  }

  ngOnInit(): void {

  }

  async toCart(item:Item): Promise<void> {
    console.log(item)
    this.dbService.addItem(item);
    console.log("ToCard");
  }
}


