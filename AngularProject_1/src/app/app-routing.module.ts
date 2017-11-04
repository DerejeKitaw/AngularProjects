import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HerosComponent } from './heros/heros.component';
import { FromControllersComponent } from './form-controllers/from-controllers.component';
import { AngularLifecycleComponent } from './angular-lifecycle/angular-lifecycle.component';
import { TodolistModule } from './todolist/todolist.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'todolist',
    loadChildren: 'app/todolist/todolist.module#TodolistModule',
    data: { preload: true }
  },
  {
    path: 'calender',
    loadChildren: 'app/calender/calender.module#CalenderModule',
    data: { preload: true }
  },
  {
    path: 'heros',
    loadChildren: 'app/heros/heros.module#HerosModule',
    data: { preload: true }
  },
  {
    path: 'formControlers',
    loadChildren: 'app/form-controllers/form-controllers.module#FormControllersModule',
    data: { preload: true }
  },
  {
    path: 'angularLifecycle',
    loadChildren: 'app/angular-lifecycle/angular-lifecycle.module#AngularLifecycleModule',
    data: { preload: true }
  },
  
  
  { path: '',   redirectTo: '/todolist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  

    
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
