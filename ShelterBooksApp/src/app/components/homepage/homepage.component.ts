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
    this.getBooksOrderByAllSelledCopies(0);
  }

  getBooksOrderByTitle(): void{
    this._apiservice.getBooks(0, 'title')
      .subscribe((response: any)=>{
          this.booksArray=response.content;
      })
  }

  getBooksOrderByInsertionDate(pageNumber: number): void{
    this._apiservice.getBooks(pageNumber, 'insertionDate')
      .subscribe((response: any)=>{
          const books = response.content;
          for(let i = 0; i < books.length; i++){
            this.news.unshift(books[i]);
          }
          if(pageNumber < response.totalPages - 1){
            this.getBooksOrderByInsertionDate(pageNumber + 1);
          }else{
            this.news.splice(5);
          }
      })
  }

  getBooksOrderByAllSelledCopies(pageNumber: number): void{
    this._apiservice.getBooks(pageNumber, 'allSelledCopies')
        .subscribe((response: any)=>{
        const books = response.content;
        for(let i = 0; i < books.length; i++){
          this.bestseller.unshift(books[i]);
        }
        if(pageNumber < response.totalPages - 1){
          this.getBooksOrderByAllSelledCopies(pageNumber + 1);
        }else{
          this.bestseller.splice(5);
        }

      })
  }
}
