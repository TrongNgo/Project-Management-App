import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import {ProjectComponent} from './project.component';


@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    //
    RouterModule.forChild([
      {
        path: '',
        component: ProjectComponent
      }
    ])
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule {
}
