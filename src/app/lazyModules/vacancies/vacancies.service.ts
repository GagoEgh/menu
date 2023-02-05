import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IHttpResponse } from '../../models/IHttpResponse';
import { VacancieDTO } from '../../models/VacancieDTO';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(private _http: HttpClient) { }

  postVacancies(vacancie:any): Observable<IHttpResponse<VacancieDTO[]>>{
    return this._http.post<IHttpResponse<null>>(`/vacancies`,vacancie)
    .pipe(switchMap(()=>{
      return this.getVacancies()
    }))
  }

  getVacancies(): Observable<IHttpResponse<VacancieDTO[]>> {
    return this._http.get<IHttpResponse<VacancieDTO[]>>(`/vacancies`)
  
  }

  updateVacanci(id:number,vacancieDTO:VacancieDTO){
    return this._http.put(`/vacancies/${id}`,vacancieDTO)
  }

  delete(id:number){
    return this._http.delete(`/vacancies/${id}`)
  }
}
