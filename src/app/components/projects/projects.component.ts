import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { ProjectDTO } from 'src/app/models/ProjectDTO';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
 
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projectForm!:FormGroup
  projects!: ProjectDTO[];
  subject$ = new Subject<void>();
  erroreMsg!:string[];

  constructor(
    private _projectService: ProjectService,
    private _fb:FormBuilder
  ) { }


  ngOnInit(): void {
    this.getProjectsAll();
    this.initProjectForm();
  }

  initProjectForm(){
    this.projectForm = this._fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }

  getProjectsAll() {
    this._projectService.getProjectsAll()
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (res: IHttpResponse<ProjectDTO[]>) => {
          this.projects = res.data;
        },
        error: (err) => {
          this.erroreMsg = err
          setTimeout(() => {
            this.erroreMsg =[]
          }, 3000)
        }
      })
  }

  onSubmit(){
    if(this.projectForm.invalid){
      return
    }

    const projectDTO = new ProjectDTO(this.projectForm)
    this._projectService.postProject(projectDTO)
    .subscribe({
      next:(res:IHttpResponse<ProjectDTO[]>)=>{
        this.projects = res.data;
        this.projectForm.reset()
      },
      error:(err)=>{
        this.erroreMsg = err
      }
    })

  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
