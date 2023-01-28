import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProjectResponse } from 'src/app/models/IProjectResponse';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectForm!: FormGroup;
  project!: IProjectResponse;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder
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

  }
}
