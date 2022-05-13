import { Component } from '@angular/core';
import * as firebase from 'firebase/compat';
import { FirebaseService } from './shared/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProgWebShop';


  constructor() {}

}
