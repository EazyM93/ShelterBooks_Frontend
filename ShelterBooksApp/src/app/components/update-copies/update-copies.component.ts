import { Component, OnInit } from '@angular/core';
import { ApiShelterService } from 'src/app/service/api-shelter.service';

@Component({
  selector: 'app-update-copies',
  templateUrl: './update-copies.component.html',
  styleUrls: ['./update-copies.component.scss']
})
export class UpdateCopiesComponent implements OnInit {

  booksArray: any[] = [];

  title: string = '';
  isbn: string = '';

  numberCopies: number = 1;

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

  getBookListByTitle(): void {
    this.shelterService
      .filterBooks('', this.title, '', '', 0, 10000, '', 0, 'title')
      .subscribe((response: any) => {
        this.booksArray=response.content;
      }
    );
  }

  getBookListByIsbn(): void {
    this.shelterService
      .filterBooks(this.isbn, '', '', '', 0, 10000, '', 0, 'title')
      .subscribe((response: any) => {
        this.booksArray=response.content;
      }
    );
  }

  update(idBookCopies: string): void {
    this.shelterService
      .updateCopies(idBookCopies, this.numberCopies)
      .subscribe(() => {
        this.getBookListByTitle();
      });


  }

}
