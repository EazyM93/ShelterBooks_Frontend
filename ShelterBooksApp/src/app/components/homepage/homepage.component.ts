import { Component, OnInit } from '@angular/core';
import { ApiShelterService } from 'src/app/service/api-shelter.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  booksArray: [] | any;

  constructor(private _apiservice:ApiShelterService) { }

  ngOnInit(): void {
    this._apiservice.getdata().subscribe(res=>{
      this.booksArray=res;
    })
  }

}