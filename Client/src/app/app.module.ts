import {HttpModule} from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './compo/app.component';
import { CustomComponent } from "./compo/custom.component";
import { ListeComponent } from "./compo/liste.component";

import {routes} from './route/route';
import { StylesComponent } from "./compo/style.component";



@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    ListeComponent,
    StylesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
