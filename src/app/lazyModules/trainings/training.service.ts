import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { IHttpResponse } from '../../models/IHttpResponse';
import { TrainingDTO } from '../../models/TrainingDTO';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private _http: HttpClient
  ) { }

  postTraining(training: FormData): Observable<IHttpResponse<TrainingDTO[]>> {
    return this._http.post<IHttpResponse<TrainingDTO[]>>(`/trainings`, training)
      .pipe(switchMap(() => {
        return this.getTrainingAll()
      }))
  }

  getTrainingAll(): Observable<IHttpResponse<TrainingDTO[]>> {
    return this._http.get<IHttpResponse<TrainingDTO[]>>(`/trainings`)
  }

  getTraining(id: number): Observable<IHttpResponse<TrainingDTO[]>> {
    return this._http.get<IHttpResponse<TrainingDTO[]>>(`/trainings/${id}`)
  }

  update(id: number, training: FormData): Observable<IHttpResponse<TrainingDTO[]>> {
    return this._http.put<IHttpResponse<TrainingDTO[]>>(`/trainings/${id}`, training
    )

  }

  delete(id: number) {
    return this._http.delete(`/trainings/${id}`)
  }

  createFormData(form: FormGroup) {
    let formData = new FormData();
 
    formData.append('image', form.get('image')?.value,form.get('image')?.value.name);
    formData.append('name', form.get('name')?.value);
    formData.append('description', form.get('description')?.value);
    formData.append('date', form.get('date')?.value);
    formData.append('type', form.get('type')?.value);
    return formData
  }
}
