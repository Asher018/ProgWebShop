import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  priceForm: FormGroup = new FormGroup({
    price: new FormControl()
  })
  

  constructor() { }

  ngOnInit(): void {
  }

  search() : void {
    console.log(this.priceForm.value.price);
  }

}
