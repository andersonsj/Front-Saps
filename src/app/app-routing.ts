import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        data: { pageTitle: 'Saps - Homecenter' },
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'cliente',
                loadChildren: './component/cliente/cliente.module#ClienteModule'
            }
        ]
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
