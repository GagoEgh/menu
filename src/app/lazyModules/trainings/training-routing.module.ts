import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { UpdatetrainingComponent } from './updatetraining/updatetraining.component';
import { TrainingResolver } from './training-resolver';

const routes: Routes = [
  { path: '', component: TrainingsComponent },
  {
    path: 'updatetraining/:id', component: UpdatetrainingComponent,
    resolve: { trainingId: TrainingResolver }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
