import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiShelterService {

  private jsonShelterUrl = 'http://localhost:3001';

  constructor(private _http:HttpClient) { }

  getBooks(): Observable<any[]> {
    return this._http.get<any>(`${this.jsonShelterUrl}/books`);
  }
}
