import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DashboardsComponent,
  LoginComponent,
  NavbarComponent,
  NewOrdersComponent,
  ProjectComponent,
  ProjectsComponent,
  SeenComponent,
  TrainingsComponent,
  UpdateProjectComponent,
  UserProfileComponent,
  VacanciesComponent
} from './components';
import { LoginGuard } from './login-guard.guard';
import { OrderIdResolver } from './order-id.resolver';
import { ProjectIdResolver } from './project-id.resolver';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'nav', component: NavbarComponent,
     canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      { path: 'dashboards', component: DashboardsComponent, },
      { path: 'new-orders', component: NewOrdersComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'trainings', component: TrainingsComponent },
      { path: 'vacancies', component: VacanciesComponent },
      { path: 'projects', component: ProjectsComponent },
      {
        path:'updateProject/:id',component:UpdateProjectComponent,
        resolve:{projectId:ProjectIdResolver}
      },
      {
        path: 'seen/:id', component: SeenComponent,
        resolve: { orderID: OrderIdResolver }
      }
    ]
  },
  { path: '**', redirectTo: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
