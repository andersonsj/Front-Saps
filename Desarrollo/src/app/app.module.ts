import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductoModule} from './component/producto/producto.module' 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    

  ],
  imports: [
    BrowserModule,
    ProductoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
