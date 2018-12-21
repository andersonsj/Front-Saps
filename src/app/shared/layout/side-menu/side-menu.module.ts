import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { EmpleadoModule } from 'src/app/component/empleado/empleado.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    EmpleadoModule,
    ReactiveFormsModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
