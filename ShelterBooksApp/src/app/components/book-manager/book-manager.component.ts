import { Component, OnInit } from '@angular/core';
import { ApiShelterService } from 'src/app/service/api-shelter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss']
})
export class BookManagerComponent implements OnInit {

  isbn: string = '';
	title: string = '';
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
  }

  save(): void {
    this.shelterService.saveBook(
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
    ).subscribe();
  }

  controllo(){
    console.log(this.genre);
  }
}
