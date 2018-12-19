import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/core/models/producto';
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
  @Output() valorTotalCot = new EventEmitter();
  @Output() valorFleteCot = new EventEmitter();
  @Output() precioPagarCot = new EventEmitter();

  public infoProducto: Producto = {
    sku: null,
    nombre: null,
    cantidad: null,
    precioUnidad: null,
    precioTotal: null,
    fichaTecnica: null
  };
  productoForm: FormGroup;
  public buscarSku: string;
  private datos: any;
  private precioTotal = 0;
  private cantidadProducto: any;
  numero = [];
  private producto: Array<any>;
  private habilita = false;
  private sw: boolean;



  private fichaTecnicaProducto: string;
  private atributosFicha = [];
  private atributosFicha3 = [];

  constructor(private productoService: ProductoService, private formBuilder: FormBuilder, private data: DataService) {
    this.data.guardarLocal('precioTotal', '0');
    this.data.guardarLocal('precioPago', '0');
    this.data.guardarLocal('precioFlete', '0');

  }

  ngOnInit() {
    console.log(this.valor);

  }

  restarCantidad(cont: number) {
    if (this.cantidadProducto > 1) {
      this.infoProducto = this.numero[cont];
      this.cantidadProducto = this.infoProducto.cantidad;
      this.cantidadProducto = this.cantidadProducto - 1;
      this.infoProducto.cantidad = this.cantidadProducto;
      this.infoProducto.precioTotal = this.infoProducto.precioUnidad * this.infoProducto.cantidad;
      this.valorTotalCot.emit(this.infoProducto.precioTotal);
      this.precioPagarCot.emit(this.infoProducto.precioTotal);
      this.data.guardarLocal('precioTotal', 'this.infoProducto.precioTotal');
      this.numero[cont] = this.infoProducto;
      this.precioTotal = 0;
      for (let j = 0; j < this.numero.length; j++) {
        this.precioTotal = this.numero[j].precioTotal + this.precioTotal;
        console.log('entre');
      }
      this.valorTotalCot.emit(this.precioTotal);
      this.precioPagarCot.emit(this.precioTotal);
      this.infoProducto = {
        sku: null,
        nombre: null,
        cantidad: null,
        precioUnidad: null,
        precioTotal: null,
        fichaTecnica: null
      };
    }
  }

  sumarCantidad(cont: number) {
    this.infoProducto = this.numero[cont];
    this.cantidadProducto = this.infoProducto.cantidad;
    this.cantidadProducto = this.cantidadProducto + 1;
    this.infoProducto.cantidad = this.cantidadProducto;
    this.infoProducto.precioTotal = this.infoProducto.precioUnidad * this.infoProducto.cantidad;
    console.log(this.infoProducto);
    this.data.guardarLocal('precioTotal', 'this.infoProducto.precioTotal');
    this.numero[cont] = this.infoProducto;
    this.precioTotal = 0;
    for (let j = 0; j < this.numero.length; j++) {
      this.precioTotal = this.numero[j].precioTotal + this.precioTotal;
      console.log('entre');
    }
    this.valorTotalCot.emit(this.precioTotal);
    this.precioPagarCot.emit(this.precioTotal);
    this.infoProducto = {
      sku: null,
      nombre: null,
      cantidad: null,
      precioUnidad: null,
      precioTotal: null,
      fichaTecnica: null
    };
  }

  listaProductos() {

    let i: any;
    i = this.numero.length;
    if (i > 0) {
      console.log(this.numero[i - 1]);
    }
    this.numero[i] = this.infoProducto;

    this.precioTotal = 0;
    for (let j = 0; j < this.numero.length; j++) {
      this.precioTotal = this.numero[j].precioTotal + this.precioTotal;
    }

    this.valorTotalCot.emit(this.precioTotal);
    this.precioPagarCot.emit(this.precioTotal);

    this.infoProducto = {
      sku: null,
      nombre: null,
      cantidad: null,
      precioUnidad: null,
      precioTotal: null,
      fichaTecnica: null
    };

    this.habilita = true;
    console.log(this.habilita);

    (<HTMLInputElement>document.getElementById('txtBuscarSku')).value = '';
  }

  buscarProducto(buscarSku: any) {

    if (buscarSku === '' || isNaN(Number(buscarSku))) {
      alert('El SKU debe ser númerico');
      (<HTMLInputElement>document.getElementById('txtBuscarSku')).value = '';
    } else {
      this.sw = false;
      this.productoService.getBuscarProductos(buscarSku).subscribe(
        (data) => {
          this.datos = data.value;
          if (data.value.length === 1) {
            this.sw = true;
            this.infoProducto.sku = this.datos[0].sku;
            this.infoProducto.nombre = this.datos[0].nombre;
            this.infoProducto.precioUnidad = this.datos[0].precio;
            this.infoProducto.cantidad = 1;
            this.infoProducto.precioTotal = this.datos[0].precio;
            this.infoProducto.fichaTecnica = this.datos[0].ficha;
            if (this.sw = true) {
              this.listaProductos();
            }
          }
        }
      );
    }

  }

  eliminarProducto(numProd: any) {
    let i: any;
    let j: any;
    j = 0;
    const productosTemp: any = [];
    for (i = 0; i < this.numero.length; i++) {
      if (i !== numProd) {
        productosTemp[j] = this.numero[i];
        j = j + 1;
      }
    }
    this.numero = productosTemp;
    this.precioTotal = 0;
    for (j = 0; j < this.numero.length; j++) {
      this.precioTotal = this.numero[j].precioTotal + this.precioTotal;
    }
    this.valorTotalCot.emit(this.precioTotal);
    this.precioPagarCot.emit(this.precioTotal);
  }

  lanzar() {
    this.valorTotalCot.emit('2000000');
  }
}
