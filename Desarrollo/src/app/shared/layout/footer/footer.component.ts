import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private data: DataService) { }

  private total;
  private precioPago = 0;
  private precioFlete;

  ngOnInit() {
    this.total = localStorage.getItem('precioTotal');
  }

}
