import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BarRoutingModule } from './bar-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SharedModule,
    BarRoutingModule
  ]
})
export class NavbarModule { }
