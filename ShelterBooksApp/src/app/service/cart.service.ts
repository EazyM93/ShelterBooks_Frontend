import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl = 'http://localhost:3001/carts';

  constructor(private _http:HttpClient) { }

  getCurrentCart(): Observable<any> {
    return this._http.get<any>(`${this.cartUrl}/currentCart`);
  }

  addBookToCart(idBook: string): Observable<any> {
    return this._http.post<any>(`${this.cartUrl}/addBook/${idBook}`, null);
  }

  removeBookFromCart(idBook: string): Observable<any> {
    return this._http.post<any>(`${this.cartUrl}/removeBook/${idBook}`, null);
  }

  clearCart(): Observable<any> {
    return this._http.post<any>(`${this.cartUrl}/clearCart`, null);
  }

}
