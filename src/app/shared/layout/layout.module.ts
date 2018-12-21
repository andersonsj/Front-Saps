import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout/empty-layout.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ProductoModule } from 'src/app/component/producto/producto.module';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SideMenuModule,
    ProductoModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    SideMenuModule
  ]

})
export class LayoutModule { }
