import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingDTO } from 'src/app/models/TrainingDTO';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  @Input() training!: TrainingDTO;
  url = environment.apiUrl
  constructor(
    private _router: Router
  ) { }


  ngOnInit(): void {

  }

  more() {
    this._router.navigate(['nav', 'trainings', 'updatetraining', this.training.id])
      .catch((err) => {
        console.log(err)
      })
  }
}
