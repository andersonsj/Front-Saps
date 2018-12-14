import { Injectable } from '@angular/core';
import { Total } from '../models/total-model';
import { Observable } from 'rxjs';
import { Data } from '../models/data-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Data;

  private valor: string;

  constructor() {

    this.data = {
      nombre: null,
      valor: null
    };

  }

  guardarLocal(nombre: any, valor: any): void {
    localStorage.setItem(this.data.nombre = nombre, this.data.valor = valor);
  }

}
