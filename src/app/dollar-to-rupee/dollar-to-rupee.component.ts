import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-dollar-to-rupee',
  templateUrl: './dollar-to-rupee.component.html',
  styleUrls: ['./dollar-to-rupee.component.css']
})
export class DollarToRupeeComponent implements OnInit {
  dollar ;
  rupee;
  hideIt = false;
  rupeeParameter;

  getDollarInput(event:Event){
    this.dollar =(<HTMLInputElement>event.target).value;
    this.rupee=  (this.rupeeParameter) * this.dollar ;
    this.hideIt= true;

  }

  constructor(private currencyService: CurrencyService) {}

    ngOnInit() {
    this.currencyService.getCurrencyParameters().subscribe((data: any)=>{
      this.rupeeParameter = data.quotes.USDINR;
      // console.log(this.rupeeParameter); 
    })  
  }
  

}