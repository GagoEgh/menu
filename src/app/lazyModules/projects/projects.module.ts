import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { HtmlelemtDirective } from './htmlelemt.directive';
import { ProjectService } from './project.service';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectsComponent,
    UpdateProjectComponent,
    HtmlelemtDirective,
  ],
  imports: [
    ProjectsRoutingModule,
    // shared module
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
 
})
export class ProjectsModule { }
