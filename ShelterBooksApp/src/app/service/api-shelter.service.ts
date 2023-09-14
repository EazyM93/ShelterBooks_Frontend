import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiShelterService {

  private BooksUrl = 'http://localhost:3001/books';

  constructor(private _http:HttpClient) { }

  getBooks(): Observable<any[]> {
    return this._http.get<any>(`${this.BooksUrl}`);
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
    return this._http.post<any>(`${this.BooksUrl}`, newBook);
  }

  updateCopies(
    idBook: string,
    plusCopies: number
  ){
    const update = { idBook, plusCopies };
    return this._http.post<any>(`${this.BooksUrl}`, update);
  }

  filterBooks(
    title: string,
    author: string,
    publisher: string,
    priceMin: number,
    priceMax: number,
    genre: string,
    pageNumber: number,
    sort: string
  ): Observable<any>{
    const params = new HttpParams()
      .set('title', title)
      .set('author', author)
      .set('publisher', publisher)
      .set('priceMin', priceMin)
      .set('priceMax', priceMax)
      .set('genre', genre)
      .set('pageNumber', pageNumber)
      .set('sort', sort);
    return this._http.get<any>(`${this.BooksUrl}/filter`, {params});
  }
}
