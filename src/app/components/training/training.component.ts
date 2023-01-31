import { Component, Input, OnInit } from '@angular/core';
import { TrainingDTO } from 'src/app/models/TrainingDTO';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  @Input()training!:TrainingDTO
  constructor() { }

  ngOnInit(): void {
    
  }

}
