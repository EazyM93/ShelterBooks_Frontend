import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiShelterService {

  constructor(private _http:HttpClient) { }

  getBooks(){
    return this._http.get('http://localhost:3001/books');
  }
}
