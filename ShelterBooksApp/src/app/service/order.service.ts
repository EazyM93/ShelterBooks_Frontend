import { HttpClient, HttpParams } from '@angular/common/http';
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

  getOrders(
    pageNumber: number,
    sort: string
  ): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('sort', sort);
    return this._http.get<any>(`${this.orderUrl}`, {params});
  }

  deployOrder(idOrder: string): Observable<any> {
    return this._http.post<any>(`${this.orderUrl}/shipOrder/${idOrder}`, null);
  }

}
