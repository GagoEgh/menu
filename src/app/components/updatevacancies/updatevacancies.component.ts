import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { VacancieDTO } from 'src/app/models/VacancieDTO';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-updatevacancies',
  templateUrl: './updatevacancies.component.html',
  styleUrls: ['./updatevacancies.component.css']
})
export class UpdatevacanciesComponent implements OnInit,OnDestroy {

  unSubscribe$ = new Subject<void>();
  vacanci!: VacancieDTO;
  vacanciForm!:FormGroup;
  errroreMsg!:string[];
  successMsg='';
  

  constructor(
    private _vacanciesService: VacanciesService,
    private _activatedRoute: ActivatedRoute,
    private _fb:FormBuilder,
    private _router:Router
  ) { }
 

  ngOnInit(): void {
    this.vacanci = this._activatedRoute.snapshot.data['vacanciId'];
    this.initVacanciForm();
  }

  initVacanciForm(){
    this.vacanciForm = this._fb.group({
      description:[this.vacanci.description],
      shortDescription:[this.vacanci.shortDescription]
    })
  }

  update(){
    const vacancieDTO = new VacancieDTO(this.vacanciForm);
    this._vacanciesService.updateVacanci(this.vacanci.id!,vacancieDTO)
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe({
      next: () => {
        this.successMsg = 'update is successful'
        setTimeout(() => {
          this.successMsg = ''
        }, 3000)
      },
      error: (err) => {
        setTimeout(()=>{
          this.errroreMsg = err.error.message
        },3000)
      }
    })
  }

  delete(id:number){
    this._vacanciesService.delete(id)
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe({
      next:()=>{
        this._router.navigate(['nav', 'vacancies'])
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
