import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { HtmlelemtDirective } from './htmlelemt.directive';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectsComponent,
    UpdateProjectComponent,
    HtmlelemtDirective,
  ],
  imports: [
    ProjectsRoutingModule,
    SharedModule
  ],
 
})
export class ProjectsModule { }
