import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProjectDTO } from 'src/app/models/ProjectDTO';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
})
export class UpdateProjectComponent implements OnInit, OnDestroy {


  projectForm!: FormGroup;
  project!: ProjectDTO;
  unSubscribe$ = new Subject<void>();
  errroreMsg!: string[];
  successMsg = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _projectService: ProjectService,
    private _router: Router
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
    this._projectService.putProject(this.project.id!, projectDTO)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe({
        next: () => {
          this.successMsg = 'update is successful'
          setTimeout(() => {
            this.successMsg = ''
          }, 3000)
        },
        error: (err) => {
          this.errroreMsg = err
          setTimeout(() => {
            this.errroreMsg=[]
          }, 3000)
         
        }
      })
  }

  delete(id: number) {
    this._projectService.deleteProject(id)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe({
        next: () => {
          this._router.navigate(['nav', 'projects'])
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

}
