import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './services/login-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  {
    path: 'nav', canActivate: [LoginGuard],
    loadChildren: () => import('./lazyModules/navbar/navbar.module')
    .then(m => m.NavbarModule),
  },
  { path: '**', redirectTo: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
