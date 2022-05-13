import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    CardContainerComponent
  ]
})
export class CardContainerModule { }
