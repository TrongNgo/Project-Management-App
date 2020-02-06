import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import {DashboardComponent} from './dashboard.component';


@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    //
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
