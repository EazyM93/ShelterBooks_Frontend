import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss']
})
export class BookManagerComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelectChange(event: any) {
    const selectedOption = event.target.value;
    if (selectedOption) {
      this.router.navigate([selectedOption], { relativeTo: this.activatedRoute });
    }
  }

}
