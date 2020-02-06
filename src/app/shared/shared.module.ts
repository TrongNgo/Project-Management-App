import {ModuleWithProviders, NgModule} from '@angular/core';

import {ThemeModule} from '@app/theme';
import {AuthenticationService, AuthGuard, GuestGuard, LoggedUserService} from '@app/services/auth';
import {ApiService, AppLoadService, ScreenService} from '@app/services/shared';

const PROVIDERS = [
  //
  AuthGuard,
  GuestGuard,
  //
  ApiService,
  ScreenService,
  AppLoadService,
  AuthenticationService,
  LoggedUserService
];

const COMPONENTS = [];

@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...PROVIDERS],
    } as ModuleWithProviders;
  }
}
