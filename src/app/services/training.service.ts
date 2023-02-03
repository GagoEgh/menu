import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IHttpResponse } from '../models/IHttpResponse';
import { TrainingDTO } from '../models/TrainingDTO';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private _http: HttpClient
  ) { }

  postTraining(training:TrainingDTO) {
    return this._http.post(`/trainings`, training)
    .pipe(switchMap(()=>{
      return this.getTrainingAll()
    }))
  }

  getTrainingAll():Observable<IHttpResponse<TrainingDTO[]>>{
    return this._http.get<IHttpResponse<TrainingDTO[]>>(`/trainings`)
  }

  getTraining(id:number):Observable<IHttpResponse<TrainingDTO[]>>{
    return this._http.get<IHttpResponse<TrainingDTO[]>>(`/trainings/${id}`)
  }

  update(id:number,training:TrainingDTO):Observable<IHttpResponse<TrainingDTO[]>>{
    return this._http.put<IHttpResponse<TrainingDTO[]>>(`/trainings/${id}`,training)
    
  }

  delete(id:number){
    return this._http.delete(`/trainings/${id}`)
  }
}
