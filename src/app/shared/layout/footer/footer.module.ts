import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SideMenuModule } from '../side-menu/side-menu.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SideMenuModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
