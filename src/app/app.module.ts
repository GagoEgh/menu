import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DashboardsComponent,
  LoginComponent,
  NavbarComponent,
  ProjectComponent,
  ProjectsComponent,
  TrainingComponent,
  TrainingsComponent,
  UpdateProjectComponent,
  UpdatevacanciesComponent,
  UserProfileComponent,
  VacancieComponent,
  VacanciesComponent,
  UpdatetrainingComponent
} from './components';
import { TokenInterceptor } from './services/token.interceptor';
import { HtmlelemtDirective } from './htmlelemt.directive';





const components = [
  AppComponent,
  LoginComponent,
  DashboardsComponent,
  NavbarComponent,
  UserProfileComponent,
  TrainingsComponent,
  VacanciesComponent,
  ProjectsComponent,
  ProjectComponent,
  UpdateProjectComponent,
  VacancieComponent,
  VacanciesComponent,
  UpdatevacanciesComponent,
  TrainingComponent,
  UpdatetrainingComponent
]





@NgModule({
  declarations: [
    ...components,
    HtmlelemtDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
