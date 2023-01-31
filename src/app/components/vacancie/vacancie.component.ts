import { Component, Input, OnInit } from '@angular/core';
import { VacancieDTO } from 'src/app/models/VacancieDTO';

@Component({
  selector: 'app-vacancie',
  templateUrl: './vacancie.component.html',
  styleUrls: ['./vacancie.component.css']
})
export class VacancieComponent implements OnInit {

  @Input()vacancie!:VacancieDTO
  constructor() { }

  ngOnInit(): void {}

}
