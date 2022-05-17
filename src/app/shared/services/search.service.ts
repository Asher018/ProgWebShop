import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  maxPrice!:Observable<number>;

  constructor() {
    this.maxPrice = of(10);
   }

  setMaxPrice(value : number) : void {
    this.maxPrice = of(value);
  }
  getMaxPrice() : Observable<number> {
    return this.maxPrice;
  }
}
