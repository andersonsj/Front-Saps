import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CollapseMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
