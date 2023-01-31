import { Component,Input } from '@angular/core';
import { ProjectDTO } from 'src/app/models/ProjectDTO';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  
})
export class ProjectComponent  {

  @Input() project!: ProjectDTO;

  constructor() {}


}
