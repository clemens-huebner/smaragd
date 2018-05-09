import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeaknessListComponent } from './weakness-list/weakness-list.component';
import { WeaknessViewComponent } from './weakness-view/weakness-view.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouteReuseStrategy} from '@angular/router';
import {CustomReuseStrategy} from './CustomRouteReuseStrategy';
import { OverviewComponent } from './overview/overview.component';
import { MeasureViewComponent } from './measure-view/measure-view.component';
import { PhaseChipsComponent } from './phase-chips/phase-chips.component';
import { BackgroundComponent } from './background/background.component';
import {AutomationDegreePipe} from './automation-degree.pipe';
import { AutomationDegreeIconPipe } from './automation-degree-icon.pipe';
import { SanitizeLinksPipe } from './sanitize-links.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeaknessListComponent,
    WeaknessViewComponent,
    OverviewComponent,
    MeasureViewComponent,
    PhaseChipsComponent,
    BackgroundComponent,
    AutomationDegreePipe,
    AutomationDegreeIconPipe,
    SanitizeLinksPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
