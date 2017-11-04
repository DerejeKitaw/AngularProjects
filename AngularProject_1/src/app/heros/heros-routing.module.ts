import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  { path: '', component: HerosComponent },
  { path: 'input-box', component: HeroListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
