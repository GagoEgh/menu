import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDTO } from 'src/app/models/ProjectDTO';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  
})
export class ProjectComponent  {

  @Input() project!: ProjectDTO;

  constructor(
    private _router:Router
  ) {}

  more(){
    this._router.navigate(['/nav','updateProject',this.project.id])
    .catch((err)=>{
      console.log(err)
    })
  }
}
