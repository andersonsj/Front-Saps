import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SideMenuModule } from './layout/side-menu/side-menu.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    SideMenuModule
  ],
  exports: [
    LayoutModule
  ]
})
export class SharedModule { }
