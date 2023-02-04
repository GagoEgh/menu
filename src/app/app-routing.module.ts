import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LoginComponent,
  ProjectsComponent,
  UpdateProjectComponent,
  UpdatevacanciesComponent,
  VacanciesComponent
} from './components';
import { LoginGuard } from './login-guard.guard';
import { ProjectIdResolver } from './services/project-id.resolver';
import { TrainingResolver } from './lazyModules/trainings/training-resolver';
import { VacancieResolver } from './services/vacancie-resolver';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'nav', loadChildren: () => import('./lazyModules/navbar/navbar.module').then(m => m.NavbarModule),

    // children: [
      //   { path: 'vacancies', component: VacanciesComponent },
      //   { path: 'projects', component: ProjectsComponent },
      //   {
      //     path: 'vacancies/updatevacanie/:id', component: UpdatevacanciesComponent,
      //     resolve: { vacanciId: VacancieResolver }
      //   },
      //   {
      //     path: 'projects/updateProject/:id', component: UpdateProjectComponent,
      //     resolve: { projectId: ProjectIdResolver }
      //   },
     
   // ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
