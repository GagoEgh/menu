import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable} from 'rxjs';

import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectIdResolver implements Resolve<boolean> {
  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    const id = route.paramMap.get('id');
    return this._projectService.getProjectById(+id!)
      .pipe(catchError(() => {
        this._router.navigate(['/nav', 'new-orders'])
        return EMPTY
      }))

  }
}
