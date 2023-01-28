import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { IUser } from 'src/app/models/IUser';
import { IWaiter } from 'src/app/models/IWaiter';
import { OrdersClass } from 'src/app/orders'

@Component({
  selector: 'app-seen',
  templateUrl: './seen.component.html',
  styleUrls: ['./seen.component.css']
})
export class SeenComponent implements OnInit {
  orders: IWaiter[] = OrdersClass.Orders;
  waiter!: IWaiter | undefined;

  constructor(
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  
    this.waiter = this._activeRoute.snapshot.data['orderID'];
  
  }



}
