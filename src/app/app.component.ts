import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap } from "rxjs/operators";
import { Item } from './shared/models/item.model';
import { DatabaseService } from './shared/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProgWebShop';


  constructor(private firestore:AngularFirestore) {}

  ngOnInit(): void {
    this.firestore.persistenceEnabled$.subscribe()  

  }




}
