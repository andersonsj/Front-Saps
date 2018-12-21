import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/core/models/producto';
import { FichaTecnica } from 'src/app/core/models/fichaTecnicaProducto';
import { ConsultaInventario } from 'src/app/core/models/consultaInventario';
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
    fichaTecnica: null,
    prdLvlChild: null
  };
  public infoFicha: FichaTecnica = {
    atributo: null,
    detalle: null
  };
  private inventario: ConsultaInventario = {
    nombre: null,
    parametros: {
      "idCiudad": null,
      "prdChild": 0
    }
  };

  productoForm: FormGroup;
  public buscarSku: string;
  private datos: any;
  private precioTotal = 0;
  private cantidadProducto: any;
  numero = [];
  inventarioTiendas = [];
  private producto: Array<any>;
  private habilita = false;
  private sw: boolean;
  private productoElegido: any;
  private nombreProducto: any;
  private skuProducto: any;
  private respuesta: any;
  nombreAlmacen: any;
  cantidad: any;
  private prdChild: number;	




  private fichaTecnicaProd: string;
  private parametrosFicha = [];
  vectorAtributosProducto = [];

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
        fichaTecnica: null,
        prdLvlChild: null
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
      fichaTecnica: null,
      prdLvlChild: null
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
      fichaTecnica: null,
      prdLvlChild: null
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
            this.infoProducto.prdLvlChild = this.datos[0].prd_lvl_child;
            if (this.sw = true) {
              this.listaProductos();
            }
          }
        }
      );
    }

  }

  verDetalleModal(numProd: any) {
    console.log(this.numero);
    console.log("num Prod: " + numProd);
    this.productoElegido = numProd;
    console.log("ficha1: " + this.numero[numProd].fichaTecnica);
    this.fichaTecnicaProd = this.numero[numProd].fichaTecnica;
    this.verDetalle(this.fichaTecnicaProd);

    this.nombreProducto = this.numero[numProd].nombre;
    this.skuProducto = this.numero[numProd].sku;
  }

  inventarioProductoModal(numProd: any) {

    this.nombreAlmacen = null;
    this.cantidad = null;
    let idCiudad: string = '1';
    let identificadorAlmacen: string = '68';
    //let prdChild: number = 223037;
    let consulta: string = 'consultar.inventario.tiendas.por.sku';
    this.inventarioTiendas = null;
   
    this.nombreProducto = this.numero[numProd].nombre;
    this.prdChild = this.numero[numProd].prdLvlChild;
    console.log("prd child "+this.numero[numProd].prdLvlChild);
    console.log(this.prdChild );

    this.inventario.nombre = consulta;
    this.inventario.parametros.idCiudad = idCiudad;
    this.inventario.parametros.prdChild = this.prdChild;

    console.log(this.inventario);

    
    this.productoService.postConsultarInventario(this.inventario)
    .subscribe(
      data => { 
        this.respuesta = data;
        this.inventarioTiendas = this.respuesta.objectoRespuesta;
        console.log(this.respuesta.objectoRespuesta);
        for (let j = 0; j < this.respuesta.objectoRespuesta.length; j++){
          if (this.inventarioTiendas[j].idAlmacen === identificadorAlmacen){
            console.log(this.respuesta.objectoRespuesta[j].idAlmacen);
            console.log(this.respuesta.objectoRespuesta[j].nombre);
            this.nombreAlmacen = this.respuesta.objectoRespuesta[j].nombre;
            this.cantidad	= this.respuesta.objectoRespuesta[j].cantidad;
          }
        }
      }
      );

  }

  eliminarProductoModal(numProd: any) {
    this.productoElegido = numProd;
    this.nombreProducto = this.numero[numProd].nombre;
    this.skuProducto = this.numero[numProd].sku;
  }

  verDetalle(ficha: any) {
    console.log("Detalles ficha");
    let cadena1: string;
    let separador = '",';
    let separador2 = '=';
    let atributosFicha = [];

    this.parametrosFicha = this.fichaTecnicaProd.split(separador);

    console.log(this.parametrosFicha);
    let i: any;
    let j: any = 0;
    let carAnterior = '"';
    let carNuevo = '';
    for (i = 0; i < this.parametrosFicha.length; i++) {
      console.log("i: " + i);

      atributosFicha = this.parametrosFicha[i].split(separador2);

      this.infoFicha.atributo = atributosFicha[0];
      atributosFicha[1] = atributosFicha[1].replace(carAnterior, carNuevo);
      this.infoFicha.detalle = atributosFicha[1];

      console.log(this.infoFicha);

      this.vectorAtributosProducto[i] = this.infoFicha;
      /*let j : any;
      j = this.numero.length;
      if (j > 0) {
        console.log(this.numero[i - 1]);
      }
      this.numero[j] = this.infoProducto;*/

      this.infoFicha = {
        atributo: null,
        detalle: null
      };
    }

    console.log("vector atributos producto: ");
    console.log(this.vectorAtributosProducto);
  }

  eliminarProducto() {
    let i: any;
    let j: any;
    j = 0;
    let productosTemp: any = [];
    console.log("length inicial" + this.numero.length);
    for (i = 0; i < this.numero.length; i++) {
      console.log("i: " + i);
      if (i != this.productoElegido) {
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
