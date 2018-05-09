import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import {WeaknessViewComponent} from './weakness-view/weakness-view.component';
import {OverviewComponent} from './overview/overview.component';
import {MeasureViewComponent} from './measure-view/measure-view.component';
import {BackgroundComponent} from './background/background.component';


const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'weakness/:id', component: WeaknessViewComponent },
  { path: 'measure/:id', component: MeasureViewComponent },
  { path: 'background', component: BackgroundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
