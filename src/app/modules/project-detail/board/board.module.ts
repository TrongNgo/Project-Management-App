import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';

import {
} from '@app/services/project';

import {BoardComponent} from '@app/modules/project-detail/board/board.component';
import {BoardListComponent} from '@app/modules/project-detail/board/board-list/board-list.component';

const COMPONENTS = [
  BoardComponent,
  BoardListComponent
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
        component: BoardComponent
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
export class BoardModule {
}
