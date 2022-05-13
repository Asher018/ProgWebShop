import { Component } from '@angular/core';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { Item } from './shared/models/item.model';
import { FirebaseService } from './shared/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProgWebShop';
  items:Observable<Item[]> | undefined;

  constructor(private fbservice: FirebaseService) {}

  ngOnInit():void {
    this.items = this.fbservice.getItems();
    this.test();
  }

  test():void {
    this.fbservice.test();
  }
}
