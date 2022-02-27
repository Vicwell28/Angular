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
  selector: 'app-practica',
  animations: [
    trigger("ArribaAbajo", [
      state("void", style({
        transform: "translateY(-100%)", 
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)", 
          opacity:1
        }))
      ])
    ]),
    trigger("AbajoArriba", [
      state("void", style({
        transform: "translateY(+100%)", 
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)", 
          opacity:1
        }))
      ])
    ]),
    trigger("IzquierdaDerecha", [
      state("void", style({
        transform: "translateX(-100%)", 
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)", 
          opacity:1
        }))
      ])
    ]),
    trigger("DerechaIzquierda", [
      state("void", style({
        transform: "translateX(+100%)", 
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)", 
          opacity:1
        }))
      ])
    ]),
  ],
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
