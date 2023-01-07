import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DashboardsComponent,
  LoginComponent,
  NavbarComponent,
  NewOrdersComponent,
  SeenComponent,
  UserProfileComponent
} from './components';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    NewOrdersComponent,
    NavbarComponent,
    UserProfileComponent,
    SeenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
