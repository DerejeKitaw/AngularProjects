import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromControllersComponent } from './from-controllers.component';
import { InputBoxComponent } from './input-box/input-box.component';

const routes: Routes = [
  { path: '', component: FromControllersComponent },
  { path: 'input-box', component: InputBoxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControllersRoutingModule { }
