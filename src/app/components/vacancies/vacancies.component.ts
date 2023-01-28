import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  constructor(
    private _orderService:OrderService
  ) { }

  ngOnInit(): void {
    // this._orderService.postVacancies()
    // .subscribe({
    //   next:(res)=>{
    //     console.log(res)
    //   },
    //   error:(err)=>{
    //     console.log(err)
    //   }
    // })

    this._orderService.getVacancies()
    .subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


}
