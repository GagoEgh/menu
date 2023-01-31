import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHttpResponse } from '../models/IHttpResponse';
import { TrainingDTO } from '../models/TrainingDTO';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) { }

  postTraining(training:TrainingDTO) {
    return this._http.post(`${this.apiUrl}/trainings`, training)
    .pipe(switchMap(()=>{
      return this.getTrainingAll()
    }))
  }

  getTrainingAll():Observable<IHttpResponse<TrainingDTO[]>>{
    return this._http.get<IHttpResponse<TrainingDTO[]>>(`${this.apiUrl}/trainings`)
  }

  getTraining(id:number):Observable<IHttpResponse<TrainingDTO[]>>{
    return this._http.get<IHttpResponse<TrainingDTO[]>>(`${this.apiUrl}/trainings/${id}`)
  }

  update(){

  }
}
