import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../empleado.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-autenticar-empleado',
  templateUrl: './autenticar-empleado.component.html',
  styleUrls: ['./autenticar-empleado.component.css']
})
export class AutenticarEmpleadoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private empleadoService: EmpleadoService) { }

  md5 = new Md5();

  private nombreEmpleado: any;

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      login: ['', Validators.required],
      clave: ['', Validators.required],
      idAlmacen: [parseInt(localStorage.idAlmacen), Validators.required]
    });
  }

  login() {

    /*  console.log(this.addForm.value);
     console.log(this.addForm.value.clave);
     this.addForm.value.clave = this.md5.appendStr('hello').end();
     console.log(this.addForm.value.clave); */
     console.log('ingreso a  login');
    this.empleadoService.postAutenticar(this.addForm.value).subscribe(data => {
      this.nombreEmpleado = data.nombre;

    }
    );
    console.log(this.nombreEmpleado);

  }


  openNav() {
    document.getElementById('mySidebar').style.width = '294px';
    document.getElementById('main').style.marginRight = '294px';
  }

  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
  }


}
