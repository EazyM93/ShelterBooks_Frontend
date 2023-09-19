import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl = 'http://localhost:3001/users';

  constructor(private _http:HttpClient) { }

  getUsers(): Observable<any[]> {
    return this._http.get<any>(`${this.userUrl}`);
  }

  addBookToWishlist(idBook: string): Observable<any>{
    return this._http.post<any>(`${this.userUrl}/addWishlist/${idBook}`, null);
  }

  removeBookFromWishlist(idBook: string): Observable<any>{
    return this._http.post<any>(`${this.userUrl}/removeWishlist/${idBook}`, null);
  }

  updateCurrentUser(
    image: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    addressName: string,
    postalCode: string,
    city: string,
    district: string,
    country: string
  ): Observable<any>{
    const updateUser = {image, name, surname, email, password, addressName, postalCode, city, district, country};
    return this._http.put<any>(`${this.userUrl}/updateCurrent`, updateUser);
  }

  deleteCurrentUser(): Observable<any>{
    return this._http.delete<any>(`${this.userUrl}/deleteCurrent`);
  }

}
