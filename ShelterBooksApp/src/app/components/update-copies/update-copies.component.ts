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

  idBook: string = '';
  plusCopies: number = 0;

  constructor(private shelterService: ApiShelterService) { }

  ngOnInit(): void {
    console.log(this.title);
    this.shelterService
      .filterBooks(this.title, '', '', 0, 10000, '', 0, 'title')
      .subscribe((response: any) => {
        this.booksArray=response.content;
        console.log(response);
      }
    );
  }

  onTitleInputChange(): void {

    this.shelterService
      .filterBooks(this.title, '', '', 0, 100000, '', 0, 'title')
      .subscribe((response: any) => {
        this.booksArray=response.content;
        console.log(this.booksArray);
      }
    );
  }

  // update(): void {
  //   this.shelterService.updateCopies(

  //   )
  // }

}
