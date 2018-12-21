import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from 'src/app/util/endpoint/configuration';
import { Autenticar } from 'src/app/core/models/autenticar-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, private configuration: Configuration) { }

  postAutenticar(autenticar: Autenticar): Observable<Autenticar> {
    return this.http.post<Autenticar>(this.configuration.validarEmpleadoApiUrl, autenticar, { headers: this.httpHeaders });
  }

  getAutenticar(): Observable<any> {
    return this.http.get(this.configuration.consultaIdEmpleApiUrl);
  }

}
