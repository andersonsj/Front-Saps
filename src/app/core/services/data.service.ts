import { Injectable } from '@angular/core';
import { Total } from '../models/total-model';
import { Observable } from 'rxjs';
import { Data } from '../models/data-model';
import { Configuration } from 'src/app/util/endpoint/configuration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Almacen } from '../models/almacen-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Data;
  total: Total;

  private valor: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, private configuration: Configuration) {

    this.data = {
      nombre: null,
      valor: null
    };

  }

  guardarLocal(nombre: any, valor: any): void {
    localStorage.setItem(this.data.nombre = nombre, this.data.valor = valor);
  }

  getDatosAlmacen(): Observable<any> {
    return this.http.get(this.configuration.consultarTiendaPorIpApiUrl);
  }


}
