import { Component, OnInit } from '@angular/core';
import { ApiShelterService } from 'src/app/service/api-shelter.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  booksArray: any[] = [];
  news: any[] = [];
  bestseller: any[] = [];

  constructor(private _apiservice:ApiShelterService) { }

  ngOnInit(): void {
    this.getBooksOrderByTitle();
    this.getBooksOrderByInsertionDate(0);
    this.getBooksOrderByAllSelledCopies();
  }

  getBooksOrderByTitle(): void{
    this._apiservice.getBooks(0, 'title')
      .subscribe((response: any)=>{
          this.booksArray=response.content;
          console.log(this.booksArray);
      })
  }

  getBooksOrderByInsertionDate(pageNumber: number): void{
    this._apiservice.getBooks(pageNumber, 'insertionDate')
      .subscribe((response: any)=>{
          const books = response.content;
          for(let i = books.length - 1; i >= 0; i--){
            this.news.push(books[i]);
          }
          if(pageNumber < response.totalPages - 1){
            this.getBooksOrderByInsertionDate(pageNumber + 1);
          }
      })
  }

  getBooksOrderByAllSelledCopies(): void{
    this._apiservice.getBooks(0, 'allSelledCopies')
        .subscribe((response: any)=>{
        const books = response.content;
        for(let i = books.length - 1; i >= books.length - 5; i--){
          this.bestseller.push(books[i]);
        }
          console.log(this.bestseller);
      })
  }
}
