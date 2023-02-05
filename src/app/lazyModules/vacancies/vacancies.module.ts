import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatevacanciesComponent } from './updatevacancies/updatevacancies.component';
import { VacancieComponent } from './vacancie/vacancie.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacanciesRoutingModule } from './vacancies-routing.module';



@NgModule({
  declarations: [
    UpdatevacanciesComponent,
    VacancieComponent,
    VacanciesComponent
  ],
  imports: [
    VacanciesRoutingModule,
    // shared module
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  
  ]
})
export class VacanciesModule { }
