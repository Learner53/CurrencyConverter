import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currencyApi = "http://apilayer.net/api/live?access_key=ab54de585ed64c78b200e30fed82a1bb";
  constructor(private httpClient: HttpClient) {}
   public getCurrencyParameters(){
    return this.httpClient.get(this.currencyApi);
  }

}