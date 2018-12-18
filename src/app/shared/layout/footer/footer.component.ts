import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnChanges, OnInit {

  @Input() otro;

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
    console.log(this.otro);
  }

  ngOnChanges(changes: SimpleChanges) {
    /*   const valor: SimpleChange = changes.valor;
      console.log('prev value: ', valor.previousValue);
      console.log('got name: ', valor.currentValue); */
  }

}
