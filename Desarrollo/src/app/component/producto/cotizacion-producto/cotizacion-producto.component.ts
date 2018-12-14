import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-cotizacion-producto',
  templateUrl: './cotizacion-producto.component.html',
  styleUrls: ['./cotizacion-producto.component.css']
})
export class CotizacionProductoComponent implements OnInit {

  private cantidadProducto: any;
  private numero = [];
  private producto: Array<any>;
  private habilita: boolean = false;

  private infoProducto: Object = {
    sku: 123456,
    nombre: "producto",
    cantidad: 0,
    precioUnidad: 0
  };

  constructor(private data: DataService) {
  }

  ngOnInit() {
  
  }

  contador() {
    this.numero.length = this.numero.length + 1;
    this.numero[this.numero.length - 1] = this.infoProducto;
    console.log('Contando tabs');
    console.log(this.numero.length);
    this.habilita = true;
    console.log(this.habilita);
    this.data.guardarLocal('precioTotal', '1');
  }

  restarCantidad() {
    if (this.cantidadProducto > 1) {
      this.cantidadProducto = this.cantidadProducto - 1;
      this.data.guardarLocal('precioTotal', '2');
    }
  }

  sumarCantidad() {
    this.cantidadProducto = this.cantidadProducto + 1;
  }

}
