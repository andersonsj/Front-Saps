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
    SharedModule,
    EmpleadoModule,
    ClienteModule,
    ProductoModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
