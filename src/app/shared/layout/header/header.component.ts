import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() nombreAsesor: string;
  // private nombreAsesor: any;

  constructor() { }

  ngOnInit() {
    console.log('estoy en mi destino final' + this.nombreAsesor);
  }


}
