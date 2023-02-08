import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingDTO } from 'src/app/models/TrainingDTO';
import { TrainingService } from 'src/app/lazyModules/trainings/training.service';
import { catchError, map, Observable, of, Subject, switchMap, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-updatetraining',
  templateUrl: './updatetraining.component.html',
  styleUrls: ['./updatetraining.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdatetrainingComponent implements OnInit, OnDestroy {
  readonly url = environment.apiUrl
  trainingForm!: FormGroup;
  training!: TrainingDTO;
  isSuccess = false;
  updateTraining$ = new Observable<string>();
  unsubscribe$ = new Subject<void>()

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _trainingService: TrainingService,
    private _router: Router
  ) { }


  ngOnInit(): void {
    this.training = this._activatedRoute.snapshot.data['trainingId'].data;
    this.initTrainingForm();
  }


  initTrainingForm() {
    this.trainingForm = this._fb.group({
      name: [this.training?.name, [Validators.required]],
      description: [this.training?.description, [Validators.required]],
      date: [this.training?.date, [Validators.required]],//?
      image: ['', [Validators.required]],//?
      type: [this.training?.type, [Validators.required]],
    })
  }

  delete(id: number) {
    this._trainingService.delete(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this._router.navigate(['nav', 'trainings'])
        }
      })
  }

  updateFIle(event: Event) {
    const file = (event.target as HTMLInputElement).files![0]
    this.trainingForm.get('image')?.setValue(file);
  }


  update() {
    const formData = this._trainingService.createFormData(this.trainingForm);
    this.updateTraining$ = this._trainingService.update(this.training.id!, formData)
      .pipe(
        switchMap(() => {
          return this._trainingService.getTraining(this.training.id!)
            .pipe(map((res: any): string => {
              this.training = res.data;
              this.isSuccess = true;
              return 'update is successful'
            }))
        }),
        catchError(() => {
          this.isSuccess = false;
          return of('update is not available')
        }))

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }
}
