import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { VacancieDTO } from 'src/app/models/VacancieDTO';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit,OnDestroy {

  vacancieForm!:FormGroup;
  vacancies!:VacancieDTO[];
  unSubscribe$ = new Subject<void>()
  constructor(
    private _vacanciesService:VacanciesService,
    private _fb:FormBuilder
  ) { }
  

  ngOnInit(): void {
    this.initVacancieForm();
    this.getVacancies();

  }

  initVacancieForm(){
    this.vacancieForm = this._fb.group({
      shortDescription:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }

  getVacancies(){
    this._vacanciesService.getVacancies()
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe({
      next:(res:IHttpResponse<VacancieDTO[]>)=>{ 
        this.vacancies = res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  
  onSubmit(){
    if(this.vacancieForm.invalid){
      return
    }
    const vacancieDTO = new VacancieDTO(this.vacancieForm);
    this._vacanciesService.postVacancies(vacancieDTO)
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe({
      next:(res)=>{
        this.vacancies = res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete()
  }

}
