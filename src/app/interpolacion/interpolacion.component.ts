import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  Nombre = "Victor Miguel Basurto Juarez"; 
  Edad = "19";
  Estado = "Comprometido";
  Universidad = "Universidad Tecnologica De Torreon";

  constructor() { }

  ngOnInit(): void {
  }

}
