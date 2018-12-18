import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CollapseMenuComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
