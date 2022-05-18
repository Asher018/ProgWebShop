import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, Subject } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { CardComponent } from '../card/card.component';



@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  priceForm: FormGroup = new FormGroup({
    priceMax: new FormControl(),
    priceMin: new FormControl()
  })

  items$!: Observable<Item[]>
  public readonly test = new Subject<string>();

  constructor(private fbservice: FirebaseService) { }

  ngOnInit(): void {
    this.items$ = this.fbservice.getItems()
  }

  lastQueried = false;
  search(): void {
    if (parseInt(this.priceForm.value.priceMin) > 0 || parseInt(this.priceForm.value.priceMax) > 0) {
      this.items$ = this.fbservice.getItemsQuery(parseInt(this.priceForm.value.priceMin), parseInt(this.priceForm.value.priceMax))
      this.lastQueried = true;
    }
    else if (this.lastQueried === true) {
      this.items$ = this.fbservice.getItems()
      this.lastQueried = false;
    }
  }

  expand(typesid:string, iconid:string) {
    let element = document.getElementById(typesid);
    let icon = document.getElementById(iconid)
    element?.classList.toggle("expand")
    icon?.classList.toggle("flip")
  }

}
