import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingDTO } from 'src/app/models/TrainingDTO';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-updatetraining',
  templateUrl: './updatetraining.component.html',
  styleUrls: ['./updatetraining.component.css']
})
export class UpdatetrainingComponent implements OnInit {
  trainingForm!: FormGroup;
  training!: TrainingDTO;
  errroreMsg!: string[];
  successMsg = '';
  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _trainingService: TrainingService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.training = this._activatedRoute.snapshot.data['trainingId'].data;
    this.initTrainingForm()
  }


  initTrainingForm() {
    this.trainingForm = this._fb.group({
      name: [this.training.name, [Validators.required]],
      description: [this.training.description, [Validators.required]],
      date: [this.training.date, [Validators.required]],//?
      image: ['', [Validators.required]],//?
      type: [this.training.type, [Validators.required]],
    })
  }

  delete(id: number) {
    this._trainingService.delete(id)
      .subscribe({
        next: () => {
          this._router.navigate(['nav', 'trainings'])
        },
        error: (err) => {
          this.errroreMsg = err
          setTimeout(() => {
            this.errroreMsg = []
          }, 3000)
        }
      })
  }

  updateFIle(event: Event) {
    const file = (event.target as HTMLInputElement).files![0]
    this.trainingForm.get('image')?.setValue(file);
  }

  update() {

    const formData = this._trainingService.createFormData(this.trainingForm);
    this._trainingService.update(this.training.id!, formData)
      .subscribe(
        {
          next: () => {
            this.successMsg = 'update is successful'
            setTimeout(() => {
              this.successMsg = ''
            }, 3000)
          },
          error: (err) => {
            this.errroreMsg = err
            setTimeout(() => {
              this.errroreMsg = []

            }, 5000)
          }
        }
      )
  }
}
