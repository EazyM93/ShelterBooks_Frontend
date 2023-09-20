import { Component, OnInit } from '@angular/core';
import { ApiShelterService } from 'src/app/service/api-shelter.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  booksArray: any[] = [];

  filterUsed: string = 'title';

  searchBox: string = '';

  titleFilter: string = '';
  isbnFilter: string = '';
  authorFilter: string = '';
  publisherFilter: string = '';
  genreFilter: string = '';

  priceMin: number = 0;
  priceMax: number = 0;

  currentPage: number = 0;
  totalPages: number = 0;

  constructor(private shelterService: ApiShelterService) { }

  ngOnInit(): void {
    this.getBookListByTitle();
  }

  setInitialMaxPrice(): void {
    let biggestPrice: number = 0;
    for(let book of this.booksArray) {
      let currentPrice = book.price;
      if(currentPrice > biggestPrice) {
        biggestPrice = currentPrice;
      }
    }
    this.priceMax = biggestPrice;
  }

  onFilterChange(): void {
    console.log(this.filterUsed);
  }

  onSearchInputChange(): void {

    switch(this.filterUsed){
      case 'title':
        this.titleFilter = this.searchBox;
        break;
      case 'isbn':
        this.isbnFilter = this.searchBox;
        break;
      case 'author':
        this.authorFilter = this.searchBox;
        break;
      case 'publisher':
        this.publisherFilter = this.searchBox;
        break;
    }

    this.getBookListFiltered();

  }

  getBookListByTitle(): void {
    this.shelterService
      .filterBooks('', this.titleFilter, '', '', 0, 10000, '', this.currentPage, 'title')
      .subscribe((response: any) => {
        const totalItems = response.totalElements;
        const pageSize = response.size;
        (response.content.length === 0) ? this.totalPages = 0 : this.totalPages = Math.ceil(totalItems / pageSize) - 1;
        this.booksArray=response.content;
        this.setInitialMaxPrice();
      }
    );
  }

  getBookListFiltered(): void {
    this.shelterService
      .filterBooks(this.isbnFilter, this.titleFilter, this.authorFilter, this.publisherFilter, this.priceMin, this.priceMax, this.genreFilter, 0, 'title')
      .subscribe((response: any) => {
        const totalItems = response.totalElements;
        const pageSize = response.size;
        (response.content.length === 0) ? this.totalPages = 0 : this.totalPages = Math.ceil(totalItems / pageSize) - 1;
        this.booksArray=response.content;
      }
    );
  }

  resetFilter(): void {
    this.filterUsed = 'title';
    this.searchBox = '';
    this.titleFilter = '';
    this.isbnFilter = '';
    this.authorFilter = '';
    this.publisherFilter = '';
    this.genreFilter = '';
    this.priceMin = 0;
    this.priceMax = 0;
    this.getBookListByTitle();
  }

  next(): void {
    this.currentPage += 1;
    this.getBookListByTitle();
  }

  previous(): void {
    this.currentPage -= 1;
    this.getBookListByTitle();
  }
}
