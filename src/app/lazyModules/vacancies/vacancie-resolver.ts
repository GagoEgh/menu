import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IHttpResponse } from '../../models/IHttpResponse';
import { VacancieDTO } from '../../models/VacancieDTO';
import { VacanciesService } from './vacancies.service';

@Injectable({
  providedIn: 'root'
})
export class VacancieResolver implements Resolve<any>{

  constructor(
    private _vacanciesService: VacanciesService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = +route.paramMap.get('id')!;
    return this._vacanciesService.getVacancies()
      .pipe(
        map((res: IHttpResponse<VacancieDTO[]>) => {
          return res.data.find((vacanci: VacancieDTO) => {
            return vacanci.id === id
          })
        }))


  }
}
