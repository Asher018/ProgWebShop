import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { SearchService } from 'src/app/shared/services/search.service';



@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  priceForm: FormGroup = new FormGroup({
    price: new FormControl()
  })
  

  constructor(private fbservice: FirebaseService) { }

  ngOnInit(): void {
  }

  search() : void {
  }

}
