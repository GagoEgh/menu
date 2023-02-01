import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrainingDTO } from 'src/app/models/TrainingDTO';

@Component({
  selector: 'app-updatetraining',
  templateUrl: './updatetraining.component.html',
  styleUrls: ['./updatetraining.component.css']
})
export class UpdatetrainingComponent implements OnInit {
  trainingForm!:FormGroup;
  training!:TrainingDTO
  constructor(
    private _fb:FormBuilder,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.training = this._activatedRoute.snapshot.data['trainingId'].data;
    console.log(this._activatedRoute)
    this.initTrainingForm()
  }


  initTrainingForm(){
    this.trainingForm = this._fb.group({
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      date: ['',[Validators.required]],
      image: ['',[Validators.required]],
      type:['',[Validators.required]],
    })
  }
  delete(){
    // id:number
  }

  update(){

  }
}
