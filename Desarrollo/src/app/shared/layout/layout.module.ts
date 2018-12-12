import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout/empty-layout.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ProductoModule } from 'src/app/component/producto/producto.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ProductoModule
  ],
  exports: [
    HeaderModule,
    FooterModule
  ]

})
export class LayoutModule { }
