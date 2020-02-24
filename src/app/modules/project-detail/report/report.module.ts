import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {
} from '@app/services/project';

import {ReportComponent} from '@app/modules/project-detail/report/report.component';

const COMPONENTS = [
  ReportComponent,
];

const PROVIDERS = [
];

@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportComponent
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
export class ReportModule {
}
