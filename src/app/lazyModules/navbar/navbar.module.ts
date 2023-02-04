import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BarRoutingModule } from './bar-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BarRoutingModule
  ]
})
export class NavbarModule { }
