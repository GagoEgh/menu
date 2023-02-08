import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, of, Subject, takeUntil } from 'rxjs';
import { VacancieDTO } from 'src/app/models/VacancieDTO';
import { VacanciesService } from 'src/app/lazyModules/vacancies/vacancies.service';

@Component({
  selector: 'app-updatevacancies',
  templateUrl: './updatevacancies.component.html',
  styleUrls: ['./updatevacancies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdatevacanciesComponent implements OnInit, OnDestroy {
  updateVacanci$ = new Observable<string>();
  unSubscribe$ = new Subject<void>();
  vacanci!: VacancieDTO;
  vacanciForm!: FormGroup;
  isSuccess = false;
 
  constructor(
    private _vacanciesService: VacanciesService,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _router: Router
  ) { }


  ngOnInit(): void {
    this.vacanci = this._activatedRoute.snapshot.data['vacanciId'];
    this.initVacanciForm();
  }

  initVacanciForm() {
    this.vacanciForm = this._fb.group({
      description: [this.vacanci.description],
      shortDescription: [this.vacanci.shortDescription]
    })
  }



  update() {
    const vacancieDTO = new VacancieDTO(this.vacanciForm);
    this.updateVacanci$ = this._vacanciesService.updateVacanci(this.vacanci.id!, vacancieDTO)
      .pipe(map(() => {
        this.isSuccess = true;
        return 'update is successful'
      }), catchError(() => {
        this.isSuccess = false
        return of('update is not available')
      }))

  }

  delete(id: number) {
    this._vacanciesService.delete(id)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe({
        next: () => {
          this._router.navigate(['nav', 'vacancies'])
        }
      }
      )
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete()
  }
}
