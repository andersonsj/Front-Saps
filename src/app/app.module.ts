import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EmpleadoModule } from './component/empleado/empleado.module';
import { ClienteModule } from './component/cliente/cliente.module';
import { ProductoModule } from './component/producto/producto.module';
import { HomeModule } from './component/home/home.module';
import { Routing } from './app-routing';
import { Configuration } from './util/endpoint/configuration';
import { ReactiveFormsModule } from '@angular/forms';
import { SideMenuModule } from './shared/layout/side-menu/side-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductoModule,
    HttpClientModule,
    Routing,
    CoreModule,
    ReactiveFormsModule,
    SharedModule,
    EmpleadoModule,
    ClienteModule,
    ProductoModule,
    HomeModule
  ],
  providers: [Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
