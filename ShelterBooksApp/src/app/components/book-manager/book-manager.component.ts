import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss']
})
export class BookManagerComponent implements OnInit {

  yesNoValue: string = 'UNAVAILABLE';

  constructor() { }

  ngOnInit(): void {
  }

}
