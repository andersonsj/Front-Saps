import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { CotizacionProductoComponent } from './cotizacion-producto/cotizacion-producto.component';
import { ProductoRouting } from 'src/app/core/routes/producto.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideMenuComponent } from 'src/app/shared/layout/side-menu/side-menu.component';
import { EmpleadoModule } from '../empleado/empleado.module';

@NgModule({
  declarations: [
    ProductoComponent,
    CotizacionProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRouting,
    ReactiveFormsModule
  ],
  exports: [
    CotizacionProductoComponent
  ]
})
export class ProductoModule { }
