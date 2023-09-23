import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiShelterService } from 'src/app/service/api-shelter.service';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.scss']
})
export class UserLibraryComponent implements OnInit {

  currentLibrary: any[] = [];

  libraryIsEmpty: boolean = true;

  constructor(private authService: AuthService, private bookService: ApiShelterService) { }

  ngOnInit(): void {
    this.getCurrentLibrary();
  }

  getCurrentLibrary(): void {
    this.authService.getCurrentUserInfo().subscribe(responseUser => {

      this.bookService.getListOfBooks().subscribe(responseCatalog => {

        const books = responseUser.purchasedBooks;
        const catalog = responseCatalog;

        if(books !== null){
          for(let idBook of books){
            for(let book of catalog){
              if(book.idBook === idBook){
                console.log(book);
                this.currentLibrary.push(book);
                break;
              }
            }
          }
        }

        if(this.currentLibrary.length > 0){
          this.libraryIsEmpty = false;
        }

      });

    });
  }
}
