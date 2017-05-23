import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DatasourcesComponent } from './datasources/datasources.component';
import { QueryComponent } from './query/query.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'datasources', component: DatasourcesComponent },
    { path: 'query', component: QueryComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

