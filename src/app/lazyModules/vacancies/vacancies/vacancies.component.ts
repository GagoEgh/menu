import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { VacancieDTO } from 'src/app/models/VacancieDTO';
import { VacanciesService } from 'src/app/lazyModules/vacancies/vacancies.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class VacanciesComponent implements OnInit {

  vacancies$ = new Observable<VacancieDTO[]>();
  vacancieForm!: FormGroup;
  erroreMsg!: string[];

  constructor(
    private _vacanciesService: VacanciesService,
    private _fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initVacancieForm();
    this.getVacancies();

  }

  initVacancieForm() {
    this.vacancieForm = this._fb.group({
      shortDescription: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  getVacancies() {
    this.vacancies$ = this._vacanciesService.getVacancies()
      .pipe(map((res: IHttpResponse<VacancieDTO[]>) => res.data.reverse()),
        catchError((err) => {
          this.erroreMsg = err
          setTimeout(() => {
            this.erroreMsg = []
          }, 3000)
          return EMPTY
        }))
  }

  onSubmit() {
    if (this.vacancieForm.invalid) {
      return
    }
    const vacancieDTO = new VacancieDTO(this.vacancieForm);
    this.vacancies$ = this._vacanciesService.postVacancies(vacancieDTO)
      .pipe(map((res: IHttpResponse<VacancieDTO[]>) => res.data.reverse()),
        catchError((err: string[]) => {
          this.erroreMsg = err;
          setTimeout(() => {
            this.erroreMsg = []
          }, 3000)
          return EMPTY
        }))
  }

}
