import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado.component';
import { AutenticarEmpleadoComponent } from './autenticar-empleado/autenticar-empleado.component';

@NgModule({
  declarations: [EmpleadoComponent, AutenticarEmpleadoComponent],
  imports: [
    CommonModule
  ]
})
export class EmpleadoModule { }
