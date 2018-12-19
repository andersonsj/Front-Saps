import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  public totalpagoMain = 80000;
  public totalMain = 0;
  public precioPagarMain = 0;

  ngOnInit() {
  }

  pasarTotal(variable): void {
    this.totalMain = variable;
  }

  pasarPrecioPagar(dato): void {
    this.precioPagarMain = dato;
  }

}
