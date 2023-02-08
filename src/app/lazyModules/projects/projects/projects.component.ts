import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, map, Observable} from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { ProjectDTO } from 'src/app/models/ProjectDTO';
import { ProjectService } from 'src/app/lazyModules/projects/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ProjectsComponent implements OnInit {
  projects$ = new Observable<ProjectDTO[]>();
  projectForm!: FormGroup
  erroreMsg!: string[];


  constructor(
    private _projectService: ProjectService,
    private _fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.getProjectsAll();
    this.initProjectForm();

  }

  initProjectForm() {
    this.projectForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  getProjectsAll() {
    this.projects$ = this._projectService.getProjectsAll()
      .pipe(
        map((res: IHttpResponse<ProjectDTO[]>) => res.data.reverse()),
        catchError((err: string[]) => {
          
          this.erroreMsg = err
          console.log(this.erroreMsg)
          setTimeout(() => {
            this.erroreMsg = []
          }, 3000)
          return EMPTY
        }))
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      return
    }

    const projectDTO = new ProjectDTO(this.projectForm)
    this.projects$ = this._projectService.postProject(projectDTO)
      .pipe(
        map((res: IHttpResponse<ProjectDTO[]>) => {
          this.projectForm.reset();
          return res.data.reverse();
        }),
        catchError((err)=>{
          this.erroreMsg = err
          return EMPTY
        }))

  }
}
