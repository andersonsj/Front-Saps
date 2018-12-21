import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { EmpleadoService } from 'src/app/component/empleado/empleado.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private empleadoService: EmpleadoService) { }

  md5 = new Md5();
  @Output() nombreEmpleado = new EventEmitter();

  private respuesta: any;
  private primerNombreEmpleado: any;
  private apellidoEmpleado: any;


  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      login: ['', Validators.required],
      clave: ['', Validators.required],
      idAlmacen: [parseInt(localStorage.idAlmacen), Validators.required]
    });
  }

  openNav() {
    console.log('ingreso open nav');
    document.getElementById('mySidebar').style.width = '294px';
    document.getElementById('main').style.marginRight = '294px';
  }

  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
  }

  login() {
    /*  console.log(this.addForm.value);
     console.log(this.addForm.value.clave);
     this.addForm.value.clave = this.md5.appendStr('hello').end();
     console.log(this.addForm.value.clave); */
    this.empleadoService.postAutenticar(this.addForm.value).subscribe(data => {
      console.log(data);
      this.respuesta = data;
      this.primerNombreEmpleado = this.respuesta.objectoRespuesta.nombres;
      this.apellidoEmpleado = this.respuesta.objectoRespuesta.apellidos;
      this.nombreEmpleado.emit(this.primerNombreEmpleado + ' ' + this.apellidoEmpleado);
      console.log('Estoy en side menu : ' + this.primerNombreEmpleado + ' ' + this.apellidoEmpleado);
    });
  }




}
