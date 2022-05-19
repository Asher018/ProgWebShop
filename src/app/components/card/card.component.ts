import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { DatabaseService } from 'src/app/shared/services/database.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})



export class CardComponent implements OnInit {

  
  @Input() items$!:Observable<Item[]>;

  constructor(private dbService: DatabaseService) {
  }

  ngOnInit(): void {

  }

  async toCart(item:Item): Promise<void> {
    console.log(item)
    this.dbService.addItem(item);
    console.log("ToCard");
  }
}


