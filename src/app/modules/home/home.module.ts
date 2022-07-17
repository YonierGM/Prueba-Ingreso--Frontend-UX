import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
