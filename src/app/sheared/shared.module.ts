import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './components/field-error.component';


@NgModule({
  declarations: [FieldErrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FieldErrorComponent
  ]
})
export class SharedModule { }
