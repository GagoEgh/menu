import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHttpResponse } from '../models/IHttpResponse';
import { ProjectDTO } from '../models/ProjectDTO';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProjectService {

  apiUrl = environment.apiUrl;
  constructor(
    private _http: HttpClient
  ) { }


  postProjects(): Observable<IHttpResponse<ProjectDTO[]>> {
    return this._http.post<IHttpResponse<ProjectDTO[]>>(`${this.apiUrl}/projects/`, {
      "title": "test",
      "description": "<b>strong_updated<b>strong_updated</b><b>strong_updated</b></b><b>strong_updated</b>v "
    })

  }

  postProject(project:ProjectDTO): Observable<IHttpResponse<ProjectDTO[]>> {
    return this._http.post<IHttpResponse<ProjectDTO[]>>(`${this.apiUrl}/projects`,project)
    .pipe(switchMap(()=>{
      return this.getProjectsAll()
    }))
  }

  getProjectsAll(): Observable<IHttpResponse<ProjectDTO[]>> {
    return this._http.get<IHttpResponse<ProjectDTO[]>>(`${this.apiUrl}/projects/all`)
  }

  getProjectById(id: number): Observable<IHttpResponse<ProjectDTO>> {
    return this._http.get<IHttpResponse<ProjectDTO>>(`${this.apiUrl}/projects/${id}`)
  }

  putProject(id: number, project: ProjectDTO) {
    return this._http.put<IHttpResponse<ProjectDTO>>(`${this.apiUrl}/projects/${id}`, project)

  }

  deleteProject(id: number) {
    return this._http.delete(`${this.apiUrl}/projects/${id}`)
      .pipe(switchMap(() => {
        return this.getProjectsAll()
      }))

  }
}
