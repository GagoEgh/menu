import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHttpResponse } from '../models/IHttpResponse';
import { VacancieDTO } from '../models/VacancieDTO';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  postVacancies(vacancie:any): Observable<IHttpResponse<VacancieDTO[]>>{
    return this._http.post<IHttpResponse<null>>(`${this.apiUrl}/vacancies`,vacancie)
    .pipe(switchMap(()=>{
      return this.getVacancies()
    }))
  }

  getVacancies(): Observable<IHttpResponse<VacancieDTO[]>> {
    return this._http.get<IHttpResponse<VacancieDTO[]>>(`${this.apiUrl}/vacancies`)
  
  }

  updateVacanci(id:number,vacancieDTO:VacancieDTO){
    return this._http.put(`${this.apiUrl}/vacancies/${id}`,vacancieDTO)
  }

  delete(id:number){
    return this._http.delete(`${this.apiUrl}/vacancies/${id}`)
  }
}
