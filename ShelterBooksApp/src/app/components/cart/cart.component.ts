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

  finalPrice: number = 0;

  constructor(private cartService: CartService, private shelterService: ApiShelterService ) { }

  ngOnInit(): void {

    this.getCurrentCart();

  }

  getCurrentCart(): void{
    this.cartService.getCurrentCart().subscribe(cart => {

      const keys = Object.keys(cart.booksWithQuantity); // extract keys from map

      for(let e of keys) {
        const bookData = this.parseKeyToObject(e); //parse data from key string

        this.shelterService.getBook(bookData.idBook).subscribe(book => {

          const newObj = {
            "idBook": book.idBook,
            "title": book.title,
            "coverLink": book.coverLink,
            "price": book.price,
            "quantity": cart.booksWithQuantity[e]
          }

          this.booksArray.push(newObj);

          this.finalPrice += book.price * cart.booksWithQuantity[e];

        });

      }

      if(this.booksArray.length === 0){
        this.cartIsEmpty = false;
      }else{
        this.cartIsEmpty = true;
      }

    });
  }

  getBook(idBook: string): any {
    let book: any;
    this.shelterService.getBook(idBook)
      .subscribe(response => {
        book = response;
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

  removeBook(idBook: string): void {
    this.cartService.removeBookFromCart(idBook).subscribe();
  }

}
