import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { IProjectResponse } from 'src/app/models/IProjectResponse';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects!: IProjectResponse[];
  subject$ = new Subject<void>();
  
  constructor(
    private _orderService: OrderService
  ) { }


  ngOnInit(): void {

    this.getProjects();
  }

  getProjects() {
    this._orderService.getProjects()
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (res: IHttpResponse<IProjectResponse[]>) => {
          this.projects = res.data;
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}