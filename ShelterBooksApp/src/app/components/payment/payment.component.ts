import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  amount = 0;

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe(totalAmountRecived => {
      this.amount = totalAmountRecived['totalAmount'];
      window.paypal.Buttons(
        {
          style: {
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
            tagline: 'false'
          },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.amount.toString(),
                    currency_code: 'EUR'
                  }
                }
              ]
            })
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              if(details.status === 'COMPLETED') {
                this.orderService.createOrder().subscribe(() => {
                  const transactionId: any = details.id;
                  this.router.navigate(['confirmation', transactionId]);
                });

              }
              console.log(details)
            });
          },
          onError: (error: any) => {
            console.log(error);
          }
        }
      ).render(this.paymentRef.nativeElement);
    });
  }

  cancel(): void {
    this.router.navigate(['cart']);
  }
}
