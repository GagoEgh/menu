import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { TrainingService } from './training.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingResolver implements Resolve<any>{

  constructor(
    private _trainingService:TrainingService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +route.paramMap.get('id')!;

   return this._trainingService.getTraining(id)
   .pipe(catchError((err)=>{
    return err
    return of({err:err.error.message})

   }))
 
   

  }
}
