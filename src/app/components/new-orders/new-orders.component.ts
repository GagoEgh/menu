import { Component, OnInit } from '@angular/core';
import { IWaiter } from 'src/app/models/IWaiter';
import { OrdersClass } from 'src/app/orders'

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {

  orders: IWaiter[] = OrdersClass.Orders;
  constructor() { }

  ngOnInit(): void { }

}
