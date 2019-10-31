import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DollarToRupeeComponent } from './dollar-to-rupee/dollar-to-rupee.component';
import { CurrencyService } from './currency.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, DollarToRupeeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CurrencyService]
})
export class AppModule { }