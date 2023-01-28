import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  constructor(
    private _orderService:OrderService
  ) { }


  ngOnInit(): void {


    this._orderService.getTraining()
    .subscribe({
      next:(res:any)=>{
        console.log(res);

      },
      error:(err)=>{
        console.log('eerrr',err)
      }
    })
  }

}
