import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IHttpResponse } from '../../models/IHttpResponse';
import { ProjectDTO } from '../../models/ProjectDTO';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProjectService {

  constructor(
    private _http: HttpClient
  ) { }

  postProject(project: ProjectDTO): Observable<IHttpResponse<ProjectDTO[]>> {
    return this._http.post<IHttpResponse<ProjectDTO[]>>(`/projects`, project)
      .pipe(switchMap(() => {
        return this.getProjectsAll()
      }))
  }

  getProjectsAll(): Observable<IHttpResponse<ProjectDTO[]>> {
    return this._http.get<IHttpResponse<ProjectDTO[]>>(`/projects/all`)
  }

  getProjectById(id: number): Observable<IHttpResponse<ProjectDTO>> {
    return this._http.get<IHttpResponse<ProjectDTO>>(`/projects/${id}`)
  }

  putProject(id: number, project: ProjectDTO) {
    return this._http.put<IHttpResponse<ProjectDTO>>(`/projects/${id}`, project)

  }

  deleteProject(id: number) {
    return this._http.delete(`/projects/${id}`)
      .pipe(switchMap(() => {
        return this.getProjectsAll()
      }))

  }
}
