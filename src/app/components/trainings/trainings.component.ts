import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { TrainingDTO } from 'src/app/models/TrainingDTO';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit, OnDestroy {

  unSubscribe$ = new Subject<void>()
  trainingForm!: FormGroup;
  trainings!: TrainingDTO[];
  erroreMsg!: string[];
  constructor(
    private _trainingService: TrainingService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initTrainingForm()
    this.getTrainings();
  }

  initTrainingForm() {
    this.trainingForm = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      image: [null, [Validators.required]],
      type: ['', [Validators.required]],
    })
  }

  getTrainings() {
    this._trainingService.getTrainingAll()
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe({
        next: (res: IHttpResponse<TrainingDTO[]>) => {
          this.trainings = res.data;
          this.erroreMsg = [];
        },
        error: (err: string[]) => {
          this.erroreMsg = err

        }
      })
  }

  onSubmit() {

    const formData = this._trainingService.createFormData(this.trainingForm);
    this._trainingService.postTraining(formData)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe({
        next: (res: IHttpResponse<TrainingDTO[]>) => {
          this.trainings = res.data;
        },
        error: (err: string[]) => {
          this.erroreMsg = err
          setTimeout(() => {
            this.erroreMsg = []
          }, 3000)
        }
      })
  }

  updateFIle(event:Event) {
    const file = (event.target as HTMLInputElement).files![0]
    this.trainingForm.get('image')?.setValue(file)
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete()
  }
}


