import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-menu',
  templateUrl: './collapse-menu.component.html',
  styleUrls: ['./collapse-menu.component.css']
})
export class CollapseMenuComponent implements OnInit {

  private estadoNav = 0;
  private Home: string;
  private consultaCliente: string;

  constructor() { }

  ngOnInit() {

  }

  manejoNav() {

    if (this.estadoNav === 0) {
      document.getElementById('mySidenav').style.width = '210px';
      document.getElementById('main').style.marginLeft = '210px';
      this.Home = ' Cotizacion abierta';
      this.consultaCliente = ' Consultar cliente';
      this.estadoNav = 1;
      console.log('Primer if');
    } else if (this.estadoNav !== 0) {
      document.getElementById('mySidenav').style.width = '70px';
      document.getElementById('main').style.marginLeft = '0';
      this.Home = '';
      this.consultaCliente = '';
      this.estadoNav = 0;
      console.log('Segundo if');
    }

  }

}
