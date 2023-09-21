import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  transactionId = '';

  constructor(private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(transactionId => {
      this.transactionId = transactionId['transactionId'];
      this.cart.clearCart().subscribe();
    });
  }

}
