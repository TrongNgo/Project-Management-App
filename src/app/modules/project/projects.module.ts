import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {
  ProjectService,
  ClientService
} from '@app/services/project';

import {ProjectsComponent} from '@app/modules/project/projects.component';
import {ProjectListComponent} from '@app/modules/project/project-list/project-list.component';
import {ProjectItemComponent} from '@app/modules/project/project-item/project-item.component';
import {ProjectDetailComponent} from '@app/modules/project/project-detail/project-detail.component';

const COMPONENTS = [
  ProjectsComponent,
  ProjectListComponent,
  ProjectItemComponent,
  ProjectDetailComponent
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
