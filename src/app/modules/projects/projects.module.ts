import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {
  ProjectService,
  ClientService
} from '@app/services/project';

import {ProjectsComponent} from '@app/modules/projects/projects.component';
import {ProjectListComponent} from '@app/modules/projects/project-list/project-list.component';
import {ProjectItemComponent} from '@app/modules/projects/project-item/project-item.component';
import {ProjectInfoComponent} from '@app/modules/projects/project-info/project-info.component';

const COMPONENTS = [
  ProjectsComponent,
  ProjectListComponent,
  ProjectItemComponent,
  ProjectInfoComponent
];

const PROVIDERS = [
  ProjectService,
  ClientService
];

@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent
      }
    ])
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
      ...PROVIDERS
  ]
})
export class ProjectsModule {
}
