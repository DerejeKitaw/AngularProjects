import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControllersRoutingModule } from './form-controllers-routing.module';
import { FromControllersComponent } from './from-controllers.component';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormControllersRoutingModule
  ],
  declarations: [FromControllersComponent, InputBoxComponent]
})
export class FormControllersModule { }
