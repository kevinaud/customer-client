import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

const routingOptions = {
    enableTracing: true // for debugging purposes
};

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, routingOptions);
