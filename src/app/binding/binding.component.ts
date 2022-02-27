import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  Nombre = "Victor Miguel Basurto Juarez"; 
  Edad = "19";
  Estado = "Comprometido";
  Universidad = "Universidad Tecnologica De Torreon";

  constructor() { }

  ngOnInit(): void {
  }

}
