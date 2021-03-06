import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';

@NgModule({
  imports: [
    CommonModule,
    TodolistRoutingModule
  ],
  declarations: [ TodolistComponent]
})
export class TodolistModule { }
