import { NgModule } from '@angular/core';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DashboardsComponent],
  imports: [
    SharedModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
