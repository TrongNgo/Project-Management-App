import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {ProjectsComponent} from '@app/modules/project/projects.component';
import {ProjectListComponent} from '@app/modules/project/project-list/project-list.component';
import {ProjectItemComponent} from '@app/modules/project/project-item/project-item.component';

const COMPONENTS = [
  ProjectsComponent,
  ProjectListComponent,
  ProjectItemComponent
]

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
