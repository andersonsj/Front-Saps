import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { CotizacionProductoComponent } from './cotizacion-producto/cotizacion-producto.component';
import { ProductoRouting } from 'src/app/core/routes/producto.routing';

@NgModule({
  declarations: [
    ProductoComponent,
    CotizacionProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRouting
  ]
})
export class ProductoModule { }
