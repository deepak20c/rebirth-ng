import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagerDemoComponent } from './pager-demo.component';
import { PagerModule } from '../../exports';

@NgModule({
  imports: [
    CommonModule,
    PagerModule
  ],
  declarations: [
    PagerDemoComponent
  ],
  exports: [
    PagerDemoComponent
  ],
  providers: [],
  entryComponents: [PagerDemoComponent]

})
export class PagerDemoModule {
}
