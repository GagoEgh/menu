import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    UserRoutingModule,
    SharedModule
  ]

})
export class UserModule { }
