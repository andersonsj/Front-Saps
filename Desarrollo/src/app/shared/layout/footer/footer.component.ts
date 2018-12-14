import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private data: DataService) { }

  private total = '0';
  private precioPago = '0';
  private precioFlete = '0';

  ngOnInit() {
    this.total = localStorage.getItem('precioTotal');
    this.precioPago = localStorage.getItem('precioPago');
    this.precioFlete = localStorage.getItem('precioFlete');
  }

}
