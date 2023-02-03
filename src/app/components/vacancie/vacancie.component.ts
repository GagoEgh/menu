import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacancieDTO } from 'src/app/models/VacancieDTO';

@Component({
  selector: 'app-vacancie',
  templateUrl: './vacancie.component.html',
  styleUrls: ['./vacancie.component.css']
})
export class VacancieComponent implements OnInit {

  @Input()vacancie!:VacancieDTO
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {}

  more(){
    this._router.navigate(['/nav/vacancies','updatevacanie', this.vacancie.id])
    .catch((err)=>{
      console.log(err)
    })
  }
}
