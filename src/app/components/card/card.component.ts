import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  items:Observable<Item[]> | undefined;

  constructor(private fbservice:FirebaseService) { }

  ngOnInit(): void {
    this.items = this.fbservice.getItems();
    this.fbservice.test();
  }

  
  toCart():void {
    console.log("ToCard")
  }
}
