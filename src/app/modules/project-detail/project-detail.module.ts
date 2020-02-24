import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {
  ProjectService
} from '@app/services/project';

import {ProjectDetailComponent} from '@app/modules/project-detail/project-detail.component';

const COMPONENTS = [
  ProjectDetailComponent,
];

const PROVIDERS = [
  ProjectService
];

@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: ':projectName',
        component: ProjectDetailComponent,
        children: [
          {
            path: '', redirectTo: 'board', pathMatch: 'full'
          },
          {
            path: 'board',
            loadChildren: () => import('./board/board.module').then(m => m.BoardModule)
          },
          {
            path: 'document',
            loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
          },
          {
            path: 'report',
            loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
          },
          {
            path: 'calendar',
            loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
          }
        ]
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
export class ProjectDetailModule {
}
