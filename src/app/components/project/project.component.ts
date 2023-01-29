import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProjectResponse } from 'src/app/models/IProjectResponse';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project!: IProjectResponse;

  @Output() deleteProject = new EventEmitter()
  constructor(
    private _orderService: OrderService
  ) {

  }

  ngOnInit(): void {

  }

  delete(id: number) {
    this._orderService.deleteProject(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this._orderService.getProjectsAll()
          this.deleteProject.emit(res.data)

        },
        error: (err) => {
          console.log(err)
        }
      })
  }
}
