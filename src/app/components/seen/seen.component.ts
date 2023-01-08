import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { IWaiter } from 'src/app/models/IWaiter';
import { OrdersClass } from 'src/app/orders'

@Component({
  selector: 'app-seen',
  templateUrl: './seen.component.html',
  styleUrls: ['./seen.component.css']
})
export class SeenComponent implements OnInit {
  orders: IWaiter[] = OrdersClass.Orders;
  waiter!:IWaiter|undefined;
  user!:IUser;
  constructor(
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem('user')!)
      this.findOrder();
  }

  findOrder(){
    this._activeRoute.params.subscribe(
      {
        next:(params:any)=>{
          this.waiter = this.orders.find((item)=>{
            return item.code === +params.id
          })
 
        }
      }
    )
  }

}
