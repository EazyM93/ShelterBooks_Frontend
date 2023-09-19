import { Component, OnInit } from '@angular/core';
import { Observable, isEmpty } from 'rxjs';
import { ApiShelterService } from 'src/app/service/api-shelter.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartIsEmpty: boolean = true;

  booksArray: any[] = [];
  booksSellsUnit: any[] = [];

  constructor(private cartService: CartService, private shelterService: ApiShelterService ) { }

  ngOnInit(): void {

    this.getCurrentCart();

  }

  getCurrentCart(): void{
    this.cartService.getCurrentCart().subscribe(cart => {

      const keys = Object.keys(cart.booksWithQuantity); // extract keys from map

      for(let e of keys) {
        const bookData = this.parseKeyToObject(e); //parse data from key string
        this.shelterService.getBook(bookData.idBook).subscribe(bookFound => {
          this.booksArray.push(bookFound);
        });

        this.booksSellsUnit.push(cart.booksWithQuantity[e]);
      }

      if(this.booksArray,isEmpty()){
        this.cartIsEmpty = false;
      }

      console.log(this.booksArray);

    });
  }

  //parse data from key string
  parseKeyToObject(key: string): any {
    const matches = key.match(/(\w+)=([^,]+)/g);
    const result: any = {};

    if (matches) {
      matches.forEach(match => {
        const parts = match.split('=');
        result[parts[0]] = parts[1];
      });
    }

    return result;
  }

}
