import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { BindingComponent } from './binding/binding.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { AnimacionesComponent } from './animaciones/animaciones.component';
import { FormulaciosComponent } from './formulacios/formulacios.component';
import { PracticaComponent } from './practica/practica.component';
import { SobreNostrosComponent } from './sobre-nostros/sobre-nostros.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErrorCompComponent } from './error-comp/error-comp.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    InterpolacionComponent,
    BindingComponent,
    CalculadoraComponent,
    DirectivasComponent,
    AnimacionesComponent,
    FormulaciosComponent,
    PracticaComponent,
    SobreNostrosComponent, 
    NavBarComponent, ErrorCompComponent, InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    FormsModule, 
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
