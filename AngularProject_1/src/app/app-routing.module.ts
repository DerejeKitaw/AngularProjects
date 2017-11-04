import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HerosComponent } from './heros/heros.component';
import { FromControllersComponent } from './form-controllers/from-controllers.component';
import { AngularLifecycleComponent } from './angular-lifecycle/angular-lifecycle.component';

const routes: Routes = [
  
    { path: 'todolist', component: TodolistComponent },
    { path: 'calender', component: CalenderComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'formControlers', component: FromControllersComponent },
    { path: 'angularLifecycle', component: AngularLifecycleComponent },

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
