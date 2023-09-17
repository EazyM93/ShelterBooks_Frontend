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
    this.getBooksOrderByInsertionDate();
    this.getBooksOrderByAllSelledCopies();
  }

  getBooksOrderByTitle(): void{
    this._apiservice.getBooks(0, 'title')
      .subscribe((response: any)=>{
          this.booksArray=response.content;
          console.log(this.booksArray);
      })
  }

  getBooksOrderByInsertionDate(): void{
    this._apiservice.getBooks(0, 'insertionDate')
      .subscribe((response: any)=>{
          const books = response.content;
          for(let i = books.length - 1; i >= books.length - 5; i--){
            this.news.push(response.content[i]);
          }
          console.log(this.news);
      })
  }

  getBooksOrderByAllSelledCopies(): void{
    this._apiservice.getBooks(0, 'allSelledCopies')
        .subscribe((response: any)=>{
        const books = response.content;
        for(let i = books.length - 1; i >= books.length - 5; i--){
          this.bestseller.push(response.content[i]);
        }
          console.log(this.bestseller);
      })
  }
}
