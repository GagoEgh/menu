import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginGuard } from 'src/app/login-guard.guard';
import { DashboardsComponent } from '../dashboards/dashboards/dashboards.component';


const routes: Routes = [
  {
    path: '', component: NavbarComponent, canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      { path: 'dashboards', loadChildren: () => import('../dashboards/dashboards.module').then(m => m.DashboardsModule) },
      { path: 'profile', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
      {path: 'trainings', loadChildren:()=>import('../trainings/trainings.module').then(m=>m.TrainingsModule)},
      
      { path: '**', redirectTo: '', component: DashboardsComponent }
    ]
    
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
