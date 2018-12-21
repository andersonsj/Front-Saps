import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { SideMenuComponent } from '../side-menu/side-menu.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnChanges, OnInit {

  @Input() valorTotal;
  @Input() valorFlete;
  @Input() precioPagar;

  @Output() nombreAsesorFooter = new EventEmitter();

  @ViewChild(SideMenuComponent) panel: SideMenuComponent;

  private nombreEmpleado: string;

  constructor(private data: DataService) {

  }

  private total;
  private precioPago;
  private precioFlete;
  public _valor;

  ngOnInit() {
    this.total = localStorage.getItem('precioTotal');
    this.precioPago = localStorage.getItem('precioPago');
    this.precioFlete = localStorage.getItem('precioFlete');
    console.log(this.valorTotal);
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  manejoPanel() {
    console.log('ingreso open manejo panel');
    this.panel.openNav();
  }

  pasarNombreEmpleado(nombre): void {
    this.nombreEmpleado = nombre;
    console.log('Ya estoy en footer: ' + this.nombreEmpleado);
    this.nombreAsesorFooter.emit(nombre);
  }
}
