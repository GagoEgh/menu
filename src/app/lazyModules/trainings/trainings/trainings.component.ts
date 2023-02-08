import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, map, Observable} from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { TrainingDTO } from 'src/app/models/TrainingDTO';
import { TrainingService } from 'src/app/lazyModules/trainings/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TrainingsComponent implements OnInit {

  trainingForm!: FormGroup;
  trainings!: TrainingDTO[];
  erroreMsg!: string[];

  trainings$ = new Observable<TrainingDTO[]>()
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
    this.trainings$ = this._trainingService.getTrainingAll()
      .pipe(
        map((res: IHttpResponse<TrainingDTO[]>): TrainingDTO[] => {
          this.erroreMsg = [];
          return res.data.reverse()
        }),
        catchError((err: string[]) => {
          this.erroreMsg = err
          return EMPTY
        }))

  }

  updateFIle(event: Event) {
    const file = (event.target as HTMLInputElement).files![0]
    this.trainingForm.get('image')?.setValue(file)
  }

  onSubmit() {
    const formData = this._trainingService.createFormData(this.trainingForm);
    this.trainings$ = this._trainingService.postTraining(formData)
      .pipe(
        map((res) => res.data.reverse()),
        catchError((err: string[]) => {
          this.erroreMsg = err
          setTimeout(() => {
            this.erroreMsg = []
          }, 3000)
          return EMPTY
        }))
  }

}


