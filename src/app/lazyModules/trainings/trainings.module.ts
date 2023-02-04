import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { UpdatetrainingComponent } from './updatetraining/updatetraining.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainingRoutingModule } from './training-routing.module';



@NgModule({
  declarations: [
    TrainingComponent,
    TrainingsComponent,
    UpdatetrainingComponent
  ],

  imports: [
    TrainingRoutingModule,
    // shared module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class TrainingsModule { }
