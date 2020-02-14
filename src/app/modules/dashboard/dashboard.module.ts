import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {ProjectsModule} from '@app/modules/project/projects.module';
import {ProjectsComponent} from "@app/modules/project/projects.component";


@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    ProjectsModule,
    //
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'projects',
            component: ProjectsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
