import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {DefaultLayoutComponent, ErrorComponent} from '@app/theme';
import {AuthGuard, GuestGuard} from '@app/services/auth';

const routes: Routes = [
  {
      path: '',
      component: DefaultLayoutComponent,
      canActivate: [AuthGuard],
      children: [
          {
              path: '',
              redirectTo: '/home',
              pathMatch: 'full'
          },
          {
            path: 'home',
            loadChildren: () => import('@app/modules/project/projects.module').then(m => m.ProjectsModule)
          }
      ]
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
