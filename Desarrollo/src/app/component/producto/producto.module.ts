import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { CotizacionProductoComponent } from './cotizacion-producto/cotizacion-producto.component';

@NgModule({
  declarations: [ProductoComponent, CotizacionProductoComponent],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { }
