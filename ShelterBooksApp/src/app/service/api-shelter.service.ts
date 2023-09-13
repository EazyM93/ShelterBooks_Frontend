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

  saveBook(
    isbn: string,
	  title: string,
    coverLink: string,
    author: string,
    publisher: string,
	  pages: number,
    price: number,
    publicationYear: number,
    genre: string,
    availableCopies: number,
	  availableEbook: string,
	  ebookSize: number,
    ebookPrice: number
  ): Observable<any> {
    const newBook = { isbn , title, coverLink, author, publisher, pages, price, publicationYear, genre, availableCopies, availableEbook, ebookSize, ebookPrice };
    return this._http.post<any>(`${this.jsonShelterUrl}/books`, newBook);
  }
}
