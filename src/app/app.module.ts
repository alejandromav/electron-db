import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatasourcesComponent } from './datasources/datasources.component';
import { QueryComponent } from './query/query.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

import { routing } from './app-routing.module';

import { ElectronService } from './services/electron.service';
import { DatasourcesService } from './services/datasources.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatasourcesComponent,
    QueryComponent,
    SettingsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ElectronService,
    DatasourcesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
