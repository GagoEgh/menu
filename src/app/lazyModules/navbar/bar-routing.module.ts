import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginGuard } from 'src/app/services/login-guard.guard';
import { DashboardsComponent } from '../dashboards/dashboards/dashboards.component';


const routes: Routes = [
  {
    path: '', component: NavbarComponent, 
    children: [
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      { path: 'dashboards', loadChildren: () => import('../dashboards/dashboards.module').then(m => m.DashboardsModule) },
      { path: 'profile', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
      {path: 'trainings', loadChildren:()=>import('../trainings/trainings.module').then(m=>m.TrainingsModule)},
      {path: 'vacancies', loadChildren:()=>import('../vacancies/vacancies.module').then(m=>m.VacanciesModule)},
      {path:'projects',loadChildren:()=>import('../projects/projects.module').then(m=>m.ProjectsModule)},
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
