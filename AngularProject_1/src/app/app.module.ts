import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TodolistModule } from './todolist/todolist.module';
import { CalenderModule } from './calender/calender.module';
import { HerosModule } from './heros/heros.module';
import { FormControllersModule } from './form-controllers/form-controllers.module';
import { AngularLifecycleModule } from './angular-lifecycle/angular-lifecycle.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodolistModule,
    CalenderModule,
    HerosModule,
    FormControllersModule,
    AngularLifecycleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
