import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from '@app/theme';
import {AuthGuard, GuestGuard} from '@app/services/auth';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('@app/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {path: '**', component: ErrorComponent}
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
