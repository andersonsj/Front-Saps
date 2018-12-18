import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Producto } from 'src/app/core/model/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-cotizacion-producto',
  templateUrl: './cotizacion-producto.component.html',
  styleUrls: ['./cotizacion-producto.component.css']
})
export class CotizacionProductoComponent implements OnInit {

  @Input() valor;
  @Output() totalpagoCotiza = new EventEmitter();

  public infoProducto: Producto = {
    sku: null,
    nombre: null,
    cantidad: null,
    precioUnidad: null,
    precioTotal: null
  };
  productoForm: FormGroup;
  public buscarSku: string;
  private datos: any;
  private precioTotal: number;
  private cantidadProducto: any;
  private numero = [];
  private producto: Array<any>;
  private habilita: boolean = false;
  private sw: boolean;

  constructor(private productoService: ProductoService, private formBuilder: FormBuilder, private data: DataService) {
    this.data.guardarLocal('precioTotal', '0');
    this.data.guardarLocal('precioPago', '0');
    this.data.guardarLocal('precioFlete', '0');

  }

  ngOnInit() {
    console.log(this.valor);

  }

  contador() {

    let i: any;
    i = this.numero.length;
    console.log('valor i' + i);
    if (i > 0) {
      console.log(this.numero[i - 1]);
    }
    this.numero[i] = this.infoProducto;


    this.infoProducto = {
      sku: null,
      nombre: null,
      cantidad: null,
      precioUnidad: null,
      precioTotal: null
    };

    this.habilita = true;

  }

  restarCantidad(cont: number) {

    if (this.cantidadProducto > 1) {
      this.infoProducto = this.numero[cont];
      this.cantidadProducto = this.infoProducto.cantidad;
      this.cantidadProducto = this.cantidadProducto - 1;
      this.infoProducto.cantidad = this.cantidadProducto;
      this.infoProducto.precioTotal = this.infoProducto.precioUnidad * this.infoProducto.cantidad;
      this.totalpagoCotiza.emit(this.infoProducto.precioTotal);
      this.data.guardarLocal('precioTotal', 'this.infoProducto.precioTotal');
      this.numero[cont] = this.infoProducto;
      this.infoProducto = {
        sku: null,
        nombre: null,
        cantidad: null,
        precioUnidad: null,
        precioTotal: null
      };


    }
  }

  sumarCantidad(cont: number) {
    console.log('cont sumar: ' + cont);
    this.infoProducto = this.numero[cont];
    this.cantidadProducto = this.infoProducto.cantidad;
    this.cantidadProducto = this.cantidadProducto + 1;
    this.infoProducto.cantidad = this.cantidadProducto;
    this.infoProducto.precioTotal = this.infoProducto.precioUnidad * this.infoProducto.cantidad;
    this.totalpagoCotiza.emit(this.infoProducto.precioTotal);
    console.log(this.infoProducto);
    this.data.guardarLocal('precioTotal', 'this.infoProducto.precioTotal');
    this.numero[cont] = this.infoProducto;
    this.infoProducto = {
      sku: null,
      nombre: null,
      cantidad: null,
      precioUnidad: null,
      precioTotal: null
    };


  }

  buscarProducto(buscarSku: any) {
    console.log('lololololo');

    this.sw = false;
    this.productoService.getBuscarProductos(buscarSku).subscribe(
      (data) => {
        this.datos = data.value;
        console.log('length data.value');
        console.log(data.value);

        if (data.value.length === 1) {
          this.sw = true;
          this.infoProducto.sku = this.datos[0].sku;
          console.log('sku datos-infoproducto');
          console.log(this.infoProducto.sku);
          this.infoProducto.nombre = this.datos[0].nombre;
          this.infoProducto.precioUnidad = this.datos[0].precio;
          this.infoProducto.cantidad = 1;
          this.infoProducto.precioTotal = this.datos[0].precio;
          this.totalpagoCotiza.emit(this.infoProducto.precioTotal);
          if (this.sw = true) {
            this.contador();
          }
        }
      }
    );

  }

  lanzar() {
    // Usamos el método emit
    this.totalpagoCotiza.emit('2000000');
    console.log('se lan zo');
  }

}