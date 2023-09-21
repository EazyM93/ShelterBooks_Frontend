import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'http://localhost:3001/orders';

  constructor(private _http:HttpClient) { }

  createOrder(): Observable<any> {
    return this._http.get<any>(`${this.orderUrl}/createOrder`);
  }

}
