import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MynumberPipe } from './shared/pipes/mynumber.pipe';
import { DescriptionPipePipe } from './shared/pipes/description-pipe.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MynumberPipe,
    DescriptionPipePipe,
    NavbarComponent,
    CardComponent,
    CardContainerComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatLabel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
