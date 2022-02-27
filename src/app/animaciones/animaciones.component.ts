import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animaciones',
  animations: [
    trigger('Disparador', [
      state("Inactivo", style({
        backgroundColor: "#eee",
        transform: 'scale(1)'
      })),
      state("Activo", style({
        backgroundColor: "#ff0000",
        transform: 'scale(1.9)'
      })),
      transition("Inactivo => Activo", [
        animate(5000, keyframes([
          style({transform: 'scale(1.1)', backgroundColor: "#eee", offset: 0.1}),
          style({transform: 'scale(1.2)', backgroundColor: "#00ff00", offset: 0.2}),
          style({transform: 'scale(1.3)', backgroundColor: "#0000ff", offset: 0.3}),
          style({transform: 'scale(1.4)', backgroundColor: "#ff0000", offset: 0.5}),
          style({transform: 'scale(1.5)', backgroundColor: "#eee", offset: 0.6}),
          style({transform: 'scale(1.6)', backgroundColor: "#00ff00", offset: 0.7}),
          style({transform: 'scale(1.7)', backgroundColor: "#0000ff", offset: 0.8}),
          style({transform: 'scale(1.8)', backgroundColor: "#eee", offset: 0.9}),
          style({transform: 'scale(1.9)', backgroundColor: "#ff0000", offset: 1})
        ]))
      ]),
      transition("Activo => Inactivo", animate("500ms ease-in")),
    ])
  ],
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css'],
  
})
export class AnimacionesComponent implements OnInit {

  Estado = "Inactivo"; 

  ReaccionBotn(){
    this.Estado = this.Estado == "Inactivo" ? "Activo" : "Inactivo"; 
    console.log(this.Estado); 
  }

  ConsoleLog(){
    console.log("Mas Sobre El Boton")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
