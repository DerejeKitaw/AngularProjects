import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControllersRoutingModule } from './form-controllers-routing.module';
import { FromControllersComponent } from './from-controllers.component';

@NgModule({
  imports: [
    CommonModule,
    FormControllersRoutingModule
  ],
  declarations: [FromControllersComponent]
})
export class FormControllersModule { }
