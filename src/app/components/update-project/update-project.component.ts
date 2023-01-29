import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProjectResponse } from 'src/app/models/IProjectResponse';
import { ProjectDTO } from 'src/app/models/ProjectDTO';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {


  projectForm!: FormGroup;
  project!: IProjectResponse;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.project = this._activatedRoute.snapshot.data['projectId'].data;
    this.initProjectForm()
  }


  initProjectForm() {
    this.projectForm = this._fb.group({
      title: [this.project.title],
      description: [this.project.description]

    })

  }

  update() {
    const projectDTO = new ProjectDTO(this.projectForm);
    this._orderService.putProject(this.project.id!, projectDTO)
      .subscribe({
        next: (res: any) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
