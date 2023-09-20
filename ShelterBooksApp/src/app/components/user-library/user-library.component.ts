import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.scss']
})
export class UserLibraryComponent implements OnInit {

  currentLibrary: any = null;

  libraryIsEmpty: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentLibrary();
  }

  getCurrentLibrary(): void {
    this.authService.getCurrentUserInfo().subscribe(response => {
      this.currentLibrary = response.purchasedBooks;
      console.log(this.currentLibrary)

      if(this.currentLibrary.length > 0){
        this.libraryIsEmpty = false;
      }
    });
  }
}
