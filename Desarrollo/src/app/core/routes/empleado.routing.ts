import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from 'src/app/component/empleado/empleado.component';
import { AutenticarEmpleadoComponent } from 'src/app/component/empleado/autenticar-empleado/autenticar-empleado.component';
import { ModuleWithProviders } from '@angular/core';

const EmpleadoRoutes: Routes = [

    { path: 'base', component: EmpleadoComponent },
    { path: 'autenticar', component: AutenticarEmpleadoComponent }

];

export const EmpleadoRouting: ModuleWithProviders = RouterModule.forChild(EmpleadoRoutes);
