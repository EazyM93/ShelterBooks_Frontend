import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiShelterService {

  private BooksUrl = 'http://localhost:3001/books';

  constructor(private _http:HttpClient) { }

  getBook(idBook: string): Observable<any> {
    return this._http.get<any>(`${this.BooksUrl}/idBook/${idBook}`);
  }

  getBooks(
    pageNumber: number,
    sort: string
  ): Observable<any[]> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('sort', sort);
    return this._http.get<any>(`${this.BooksUrl}`, {params});
  }

  saveBook(
    isbn: string,
	  title: string,
    description: string,
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
    const newBook = { isbn , title, description, coverLink, author, publisher, pages, price, publicationYear, genre, availableCopies, availableEbook, ebookSize, ebookPrice };
    return this._http.post<any>(`${this.BooksUrl}`, newBook);
  }

  updateBook(
    idBook: string,
    isbn: string,
	  title: string,
    description: string,
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
    const updateBook = { isbn , title, description, coverLink, author, publisher, pages, price, publicationYear, genre, availableCopies, availableEbook, ebookSize, ebookPrice };
    return this._http.put<any>(`${this.BooksUrl}/${idBook}`, updateBook);
  }

  updateCopies(
    idBook: string,
    numberCopies: number
  ): Observable<any>{
    const copies = {idBook, numberCopies};
    return this._http.post<any>(`${this.BooksUrl}/updateCopies`, copies);
  }

  filterBooks(
    isbn: string,
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
      .set('isbn', isbn)
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

  deleteBook(idBook: string): Observable<any>{
    return this._http.delete<any>(`${this.BooksUrl}/${idBook}`);
  }
}
