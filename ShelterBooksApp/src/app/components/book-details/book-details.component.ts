import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiShelterService } from 'src/app/service/api-shelter.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  idBook: string = '';
  isbn: string = '';
	title: string = '';
  description: string = '';
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

  constructor(private route: ActivatedRoute, private shelterService: ApiShelterService, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(idRecived => {
      this.idBook = idRecived['id'];
      this.shelterService.getBook(this.idBook)
        .subscribe(response => {
          this.isbn = response.isbn;
          this.title = response.title;
          this.description = response.description;
          this.coverLink = response.coverLink;
          this.author = response.author;
          this.publisher = response.publisher;
          this.pages = response.pages;
          this.price = response.price;
          this.publicationYear = response.publicationYear;
          this.genre = response.genre.toLowerCase();
          this.availableCopies = response.availableCopies;
          this.availableEbook = response.availableEbook;
          this.ebookSize = response.ebookSize;
          this.ebookPrice = response.ebookPrice;
        });
    });
  }

  addBookToWishList(): void{
    this.userService.addBookToWishlist(this.idBook).subscribe();
  }

}