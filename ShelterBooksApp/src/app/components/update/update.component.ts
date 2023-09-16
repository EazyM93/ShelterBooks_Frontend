import { Component, OnInit } from '@angular/core';
import { ApiShelterService } from 'src/app/service/api-shelter.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  booksArray: any[] = [];

  titleFilter: string = '';
  isbnFilter: string = '';

  numberCopies: number = 1;

  //info single book
  isbn:string = '';
  title:string = '';
  coverLink: string = '';
  author: string = '';
  publisher: string = '';
	pages: number = 0;
  price: number = 0;
  publicationYear: number = 0;
  genre: string = '';
  availableCopies: number = 0;
	availableEbook: string = 'UNAVAILABLE';
	ebookSize: number = 0;
  ebookPrice: number = 0;

  constructor(private shelterService: ApiShelterService) { }

  ngOnInit(): void {
    this.getBookListByTitle();
  }

  onTitleInputChange(): void {
    this.getBookListByTitle();
  }

  onIsbnInputChange(): void {
    this.getBookListByIsbn();
  }

  getBookInfo(idBook: string): void {
    const findBook: any = this.shelterService
      .getBook(idBook)
      .subscribe((response: any) => {
        this.isbn = response.isbn;
        this.title = response.title;
        this.coverLink = response.coverLink;
        this.author = response.author;
        this.publisher = response.publisher;
        this.pages = response.pages;
        this.price = response.price;
        this.publicationYear = response.publicationYear;
        this.genre = response.genre;
        this,this.availableCopies = response.availableCopies;
        this.availableEbook = response.availableEbook;
        this.ebookSize = response.ebookSize;
        this.ebookPrice = response.ebookPrice;
      }
    );
  }

  clearData(): void {
    this.isbn = '';
  }

  getBookListByTitle(): void {
    this.shelterService
      .filterBooks('', this.titleFilter, '', '', 0, 10000, '', 0, 'title')
      .subscribe((response: any) => {
        this.booksArray=response.content;
      }
    );
  }

  getBookListByIsbn(): void {
    this.shelterService
      .filterBooks(this.isbnFilter, '', '', '', 0, 10000, '', 0, 'title')
      .subscribe((response: any) => {
        this.booksArray=response.content;
      }
    );
  }

  updateCopies(idBookCopies: string): void {
    this.shelterService
      .updateCopies(idBookCopies, this.numberCopies)
      .subscribe(() => {
        this.getBookListByTitle();
      });
  }

  updateData(idBook: string): void{
    if(this.availableEbook === 'UNAVAILABLE'){
      this.ebookPrice = 0;
      this.ebookSize = 0;
    }
    this.shelterService.updateBook(
      idBook,
      this.isbn,
      this.title,
      this.coverLink,
      this.author,
      this.publisher,
      this.pages,
      this.price,
      this.publicationYear,
      this.genre,
      this.availableCopies,
      this.availableEbook,
      this.ebookSize,
      this.ebookPrice
    ).subscribe(() => {
      this.clearData();
    });
  }

  deleteBook(idBook: string): void{
    this.shelterService.deleteBook(idBook)
      .subscribe();
  }

}
