import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/lazyModules/projects/project.service';
import {catchError, map, Observable, of, Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDTO } from 'src/app/models/ProjectDTO';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateProjectComponent implements OnInit, OnDestroy {


  projectForm!: FormGroup;
  isSuccess = false;
  project!: ProjectDTO;
  successMsg$ = new Observable<string>();
  unSubscribe$ = new Subject<void>();

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
    this.successMsg$ = this._projectService.putProject(this.project.id!, projectDTO)
      .pipe(
        map(() => {
          this.isSuccess = true;
          return 'update is successful'
        }),
        catchError((err) => {
          this.isSuccess = false;
          return of('update is not available')
        })
      )
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
