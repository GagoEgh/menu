import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancieResolver } from './vacancie-resolver';
import { UpdatevacanciesComponent } from './updatevacancies/updatevacancies.component';

const routes: Routes = [

  { path: '', component: VacanciesComponent },
  {
    path: 'updatevacanie/:id', component: UpdatevacanciesComponent,
    resolve: { vacanciId: VacancieResolver }
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacanciesRoutingModule { }
