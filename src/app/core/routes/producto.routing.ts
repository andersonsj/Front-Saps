import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from 'src/app/component/producto/producto.component';
import { CotizacionProductoComponent } from 'src/app/component/producto/cotizacion-producto/cotizacion-producto.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const ProductoRoutes: Routes = [

    { path: 'base', component: ProductoComponent },
    { path: 'cotizacion', component: CotizacionProductoComponent }

];

export const ProductoRouting: ModuleWithProviders = RouterModule.forChild(ProductoRoutes);
