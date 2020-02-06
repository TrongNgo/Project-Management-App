import {NgModule} from '@angular/core';

//
import {ThemeModule} from '@app/theme';
//
import {RouterModule} from '@angular/router';
import {GuestGuard} from '@app/services/auth';
import {AuthComponent} from '@app/modules/auth/auth.component';
import {LoginFormComponent} from '@app/modules/auth/login-form/login-form.component';

const COMPONENTS = [
  AuthComponent, LoginFormComponent
];


@NgModule({
  imports: [
    ThemeModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginFormComponent,
        canActivate: [GuestGuard]
      }
    ])
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class AuthModule {
}
