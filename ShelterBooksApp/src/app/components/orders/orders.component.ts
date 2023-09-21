import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];
  pageNumber: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders(this.pageNumber, 'submitted').subscribe(response => {
      const allOrders = response.content;

      for(let o of allOrders) {
        if(o.shipped === null){
          this.orders.push(o);
        }
      }

      console.log(this.orders);
    });
  }

  deploy(idOrder: string): void {
    this.orderService.deployOrder(idOrder).subscribe(() => {
      this.getOrders();
    });
  }
}
