import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl = 'http://localhost:3001/users';

  constructor(private _http:HttpClient) { }

  addBookToWishlist(idBook: string): Observable<any>{
    return this._http.post<any>(`${this.userUrl}/addWishlist/${idBook}`, null);
  }

  updateUser(
    idUser: string,
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
    const updateUser = {idUser, name, surname, email, password, addressName, postalCode, city, district, country};
    return this._http.put<any>(`${this.userUrl}/${idUser}`, updateUser);
  }

}
