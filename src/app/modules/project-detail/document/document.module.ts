import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {
} from '@app/services/project';

import {DocumentComponent} from '@app/modules/project-detail/document/document.component';

const COMPONENTS = [
  DocumentComponent,
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
        component: DocumentComponent
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
export class DocumentModule {
}
