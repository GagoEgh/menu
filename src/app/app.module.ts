import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {

  LoginComponent,
  ProjectComponent,
  ProjectsComponent,
  UpdateProjectComponent,
  UpdatevacanciesComponent,
  VacancieComponent,
  VacanciesComponent,

} from './components';
import { MainInterceptor } from './services/main.interceptor';
import { HtmlelemtDirective } from './htmlelemt.directive';





const components = [
  AppComponent,
  LoginComponent,

 
  VacanciesComponent,
  ProjectsComponent,
  ProjectComponent,
  UpdateProjectComponent,
  VacancieComponent,
  VacanciesComponent,
  UpdatevacanciesComponent,
 
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
      useClass: MainInterceptor,
      multi: true
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
