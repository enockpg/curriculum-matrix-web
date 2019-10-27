import { MenuComponent } from './template/menu/menu.component';
import { HeaderComponent } from './template/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    BrowserModule,
    CommonModule,

  ],
  exports: [HeaderComponent, MenuComponent]
})
export class CoreModule { }
