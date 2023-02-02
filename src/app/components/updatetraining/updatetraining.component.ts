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
  trainingForm!:FormGroup;
  training!:TrainingDTO;
  errroreMsg='';
  successMsg='';
  constructor(
    private _fb:FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _trainingService:TrainingService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.training = this._activatedRoute.snapshot.data['trainingId'].data;
    this.initTrainingForm()
  }


  initTrainingForm(){
    this.trainingForm = this._fb.group({
      name: [this.training.name,[Validators.required]],
      description: [this.training.description,[Validators.required]],
      date: [this.training.date,[Validators.required]],//?
      image: [this.training.image,[Validators.required]],//?
      type:[this.training.type,[Validators.required]],
    })
  }

  delete(id:number){
    this._trainingService.delete(id)
    .subscribe({
      next:()=>{
        this._router.navigate(['nav', 'trainings'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  update(){
    const trainigDTO = new TrainingDTO(this.trainingForm);
    this._trainingService.update(this.training.id!,trainigDTO)
    .subscribe(
      {
        next: () => {
          this.successMsg = 'update is successful'
          setTimeout(() => {
            this.successMsg = ''
          }, 3000)
        },
        error: (err) => {
          this.errroreMsg = err.error.message
          setTimeout(()=>{
            this.errroreMsg=''
            
          },3000)
        }
      }
    )
  }
}