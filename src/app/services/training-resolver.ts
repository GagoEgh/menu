import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
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
   .subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
   })
   

  }
}
