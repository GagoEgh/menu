import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent, LoginComponent, NavbarComponent, NewOrdersComponent, SeenComponent, UserProfileComponent } from './components';
import { LoginGuard } from './login-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'nav', component: NavbarComponent, canActivateChild: [LoginGuard],
    children: [
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      { path: 'dashboards', component: DashboardsComponent, },
      { path: 'new-orders', component: NewOrdersComponent },
      { path: 'profile', component: UserProfileComponent },
      {path:'seen',component:SeenComponent}
    ]
  },
  { path: '**', redirectTo: '',component:LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
