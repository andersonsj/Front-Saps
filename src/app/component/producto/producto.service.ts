import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/util/endpoint/configuration';
import { ConsultaInventario } from 'src/app/core/models/consultaInventario';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private configuration: Configuration) { }

  getBuscarProductos(producto: any): Observable<any> {
    const complemento = '&$filter=idZona%20eq%2041&$top=1&$skip=0&$count=true&$select=sku,nombre,precio,ficha,cmr,garantia,cmrfrom';
    console.log('info producto: ' + producto);
    return this.http.get(this.configuration.consutarCatalogoApiUrl + producto + complemento);
  }

  postConsultarInventario(consulta: ConsultaInventario): Observable<ConsultaInventario> {
    return this.http.post<ConsultaInventario>(this.configuration.consultaInventarioUrl, consulta, { headers: this.httpHeaders });
  } 
}
