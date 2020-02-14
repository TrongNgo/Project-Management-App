import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import {ProjectsComponent} from './projects.component';

const COMPONENTS = [
  ProjectsComponent
];

const PROVIDERS = [

];

@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    //
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent
      }
    ])
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class ProjectsModule {
}
