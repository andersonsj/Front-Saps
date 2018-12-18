import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado.component';
import { AutenticarEmpleadoComponent } from './autenticar-empleado/autenticar-empleado.component';
import { EmpleadoRouting } from 'src/app/core/routes/empleado.routing';

@NgModule({
  declarations: [
    EmpleadoComponent,
    AutenticarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRouting
  ]
})
export class EmpleadoModule { }
