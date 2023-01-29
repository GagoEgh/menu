import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TokenInterceptor } from './services/token.interceptor';
import { HtmlelemtDirective } from './htmlelemt.directive';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    NewOrdersComponent,
    NavbarComponent,
    UserProfileComponent,
    SeenComponent,
    TrainingsComponent,
    VacanciesComponent,
    ProjectsComponent,
    ProjectComponent,
    HtmlelemtDirective,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
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
