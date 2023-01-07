import { Component, OnInit } from '@angular/core';
import { IOrders } from 'src/app/models/IOrders';
import { OrdersClass } from 'src/app/orders'

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {

  orders: IOrders = OrdersClass.Orders;
  constructor() { }

  ngOnInit(): void {

  
    console.log(this.orders)
  }

}
