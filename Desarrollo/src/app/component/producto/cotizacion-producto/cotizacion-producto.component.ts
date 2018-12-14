import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/component/producto/producto.service';
import { Producto } from 'src/app/core/model/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-cotizacion-producto',
  templateUrl: './cotizacion-producto.component.html',
  styleUrls: ['./cotizacion-producto.component.css']
})
export class CotizacionProductoComponent implements OnInit {
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

  constructor(private productoService: ProductoService, private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    /*this.productoForm = this.formBuilder.group({
      txtSku : ['', Validators.required],
      txtNombre: ['', Validators.required],
      txtCantidad: ['', Validators.required],
      txtPrecio: ['', Validators.required],
      txtPrecioTotal: ['', Validators.required],
    });*/
  }

  contador() {
    console.log("length1");
    console.log(this.numero.length);
    console.log(this.infoProducto)

    let i: any;
    i = this.numero.length;
    console.log("valor i" + i);
    if (i > 0){
      console.log(this.numero[i-1]);
    }
    this.numero[i] = this.infoProducto;
    
    console.log("length2");
    console.log(this.numero.length);

    console.log("Tengo esto numero: ");
    console.log(this.numero);
    console.log("Muestro esto numero[0]: ");
    console.log(this.numero[0]);

    this.infoProducto={
      sku: null,
      nombre: null,
      cantidad: null,
      precioUnidad: null,
      precioTotal: null
    };

    /*
    let i: any;
    console.log("informacion for");
    for(i = 0; this.numero.length; i++){
      console.log(this.numero[i]);
    }*/
    
    this.habilita = true;
    console.log(this.habilita);
    
  }

  restarCantidad(cont: number) {
    console.log("cont restar: "+cont);
    if (this.cantidadProducto > 1) {
      this.infoProducto = this.numero[cont];
      this.cantidadProducto = this.infoProducto.cantidad;
      this.cantidadProducto = this.cantidadProducto - 1;
      this.infoProducto.cantidad = this.cantidadProducto;
      this.infoProducto.precioTotal = this.infoProducto.precioUnidad * this.infoProducto.cantidad;
      console.log(this.infoProducto);
      this.data.guardarLocal('precioTotal', 'this.infoProducto.precioTotal');
      this.numero[cont] =  this.infoProducto;
      this.infoProducto={
        sku: null,
        nombre: null,
        cantidad: null,
        precioUnidad: null,
        precioTotal: null
      };
      
    }
    

  }

  sumarCantidad(cont: number) {
    console.log("cont sumar: "+cont);
    this.infoProducto = this.numero[cont];
    this.cantidadProducto = this.infoProducto.cantidad;
    this.cantidadProducto = this.cantidadProducto + 1;
    this.infoProducto.cantidad = this.cantidadProducto;
    this.infoProducto.precioTotal = this.infoProducto.precioUnidad * this.infoProducto.cantidad;
      console.log(this.infoProducto);
      this.data.guardarLocal('precioTotal', 'this.infoProducto.precioTotal');
      this.numero[cont] =  this.infoProducto;
      this.infoProducto={
        sku: null,
        nombre: null,
        cantidad: null,
        precioUnidad: null,
        precioTotal: null
      };
  }
  //91249
  buscarProducto(buscarSku: any) {
    console.log("lololololo");
    
    this.sw = false;
    this.productoService.getBuscarProductos(buscarSku).subscribe(
      (data) => {
        this.datos = data.value;
        console.log("length data.value");
        console.log(data.value);
        
          
          
        if (data.value.length == 1){
          this.sw = true;
          this.infoProducto.sku = this.datos[0].sku;
          console.log("sku datos-infoproducto");
          console.log(this.infoProducto.sku);
          this.infoProducto.nombre = this.datos[0].nombre;
          this.infoProducto.precioUnidad = this.datos[0].precio;
          this.infoProducto.cantidad = 1;
          this.infoProducto.precioTotal = this.datos[0].precio;
          if(this.sw = true){
            this.contador();
          }
        }
      }
    );
    
  }

}
