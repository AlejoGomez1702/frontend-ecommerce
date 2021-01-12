import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarShoppingCartComponent } from './components/bar-shopping-cart/bar-shopping-cart.component';
import { MaterialModule } from './material/material.module';
import { MainBarComponent } from './components/main-bar/main-bar.component';


@NgModule({
  declarations: [
    BarShoppingCartComponent,
    MainBarComponent
  ],
  exports: [
    BarShoppingCartComponent,
    MainBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
