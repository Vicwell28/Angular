import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimacionesComponent } from './animaciones/animaciones.component';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ErrorCompComponent } from './error-comp/error-comp.component';
import { FormulaciosComponent } from './formulacios/formulacios.component';
import { InicioComponent } from './inicio/inicio.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PracticaComponent } from './practica/practica.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreNostrosComponent } from './sobre-nostros/sobre-nostros.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path:"Proyectos/Interpolacion", component:InterpolacionComponent},
  {path:"Proyectos/Binding", component:BindingComponent},
  {path:"Proyectos/Calculadora", component:CalculadoraComponent},
  {path:"Proyectos/Directivas", component:DirectivasComponent},
  {path:"Proyectos/Animaciones", component:AnimacionesComponent},
  {path:"Proyectos/Formulario", component:FormulaciosComponent},
  {path:"Nosotros", component:SobreNostrosComponent},
  {path:"Practica", component:PracticaComponent},
  {path:"**", component:ErrorCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
