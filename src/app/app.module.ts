import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule,  routingComponents} from './app-routing.module';

import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./material.module";
import {ComponentsModule} from "./components/Components.module";
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ExchangeRateApiService } from './services/exchange-rate-api.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule,
    CustomMaterialModule,
    ComponentsModule
  ],
  providers: [ExchangeRateApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
