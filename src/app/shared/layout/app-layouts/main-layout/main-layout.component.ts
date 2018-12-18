import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  public totalpagoMain = 80000;

  ngOnInit() {
  }

  pasarDato(variable): void {
    console.log('Imprimo la variable');
    console.log(variable);
    console.log('se lanzo en main');
  }

}
