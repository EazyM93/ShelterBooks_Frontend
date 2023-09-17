import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiShelterService } from 'src/app/service/api-shelter.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  idBook: string = '';
  coverLink: string = '';
  title: string = '';

  constructor(private route: ActivatedRoute, private shelterService: ApiShelterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(idRecived => {
      this.idBook = idRecived['id'];
      this.shelterService.getBook(this.idBook)
        .subscribe(response => {
          this.coverLink = response.coverLink;
          this.title = response.title;
        });
    });
  }

}
