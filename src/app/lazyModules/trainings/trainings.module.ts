import { NgModule } from '@angular/core';
import { TrainingComponent } from './training/training.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { UpdatetrainingComponent } from './updatetraining/updatetraining.component';
import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TrainingComponent,
    TrainingsComponent,
    UpdatetrainingComponent
  ],

  imports: [
    TrainingRoutingModule,
    // shared module
    SharedModule
  ]
})
export class TrainingsModule { }
