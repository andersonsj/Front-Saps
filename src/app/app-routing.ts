import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [

    {
        path: 'Saps',
        component: MainLayoutComponent,
        data: { pageTitle: 'Saps - Homecenter' },
        children: [
            {
                path: 'cliente',
                loadChildren: './component/cliente/cliente.module#ClienteModule'
            }
        ]
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
