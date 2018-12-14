import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { CotizacionProductoComponent } from './cotizacion-producto/cotizacion-producto.component';
import { ProductoRouting } from 'src/app/core/routes/producto.routing';
import { ReactiveFormsModule } from '@angular/forms';

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
