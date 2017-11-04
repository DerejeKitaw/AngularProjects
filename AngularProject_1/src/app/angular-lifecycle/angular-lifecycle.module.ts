import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularLifecycleRoutingModule } from './angular-lifecycle-routing.module';
import { AngularLifecycleComponent } from './angular-lifecycle.component';

@NgModule({
  imports: [
    CommonModule,
    AngularLifecycleRoutingModule
  ],
  declarations: [AngularLifecycleComponent]
})
export class AngularLifecycleModule { }
