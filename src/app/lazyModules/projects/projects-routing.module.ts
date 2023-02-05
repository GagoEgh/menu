import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ProjectIdResolver } from './project-id.resolver';


const routes: Routes = [
  { path: '', component: ProjectsComponent },
  {
    path: 'updateProject/:id', component: UpdateProjectComponent,
    resolve: { projectId: ProjectIdResolver }
  },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
