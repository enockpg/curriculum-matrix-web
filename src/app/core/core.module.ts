import { MenuComponent } from './template/menu/menu.component';
import { HeaderComponent } from './template/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,

  ],
  exports: [HeaderComponent, MenuComponent]
})
export class CoreModule { }
