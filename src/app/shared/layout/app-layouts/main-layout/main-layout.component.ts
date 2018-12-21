import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private serviceData: DataService, private almacenamientoLocal: DataService) { }

  public totalpagoMain = 80000;
  public totalMain = 0;
  public precioPagarMain = 0;

  ngOnInit() {
    this.obtenerDatosAlmacen();
    console.log('Consultando datos');
  }

  pasarTotal(variable): void {
    this.totalMain = variable;
  }

  pasarPrecioPagar(dato): void {
    this.precioPagarMain = dato;
  }


  obtenerDatosAlmacen() {
    this.serviceData.getDatosAlmacen().subscribe(datosAlmacen => {
      this.almacenamientoLocal.guardarLocal('idAlmacen', datosAlmacen.objectoRespuesta.idAlmacen);
      this.almacenamientoLocal.guardarLocal('nombreAlmacen', datosAlmacen.objectoRespuesta.nombre);
      this.almacenamientoLocal.guardarLocal('tipoAlmacen', datosAlmacen.objectoRespuesta.tipoAlmacen);

    });
  }

}
