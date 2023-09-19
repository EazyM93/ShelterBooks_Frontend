import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartIsEmpty: boolean = true;
  cartElements: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.getCurrentCart();

  }

  getCurrentCart(): void{
    this.cartService.getCurrentCart().subscribe(cart => {

    });
  }

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
