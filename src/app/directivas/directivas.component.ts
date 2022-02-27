import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  Nombre = ""; 
  Usuario = ""; 
  Registrado = false; 
  Mensaje = ""; 

  UsuarioRegistrado(){
    this.Registrado = true;
    
    this.Mensaje = "El Usuario Se Ha Registrado Con Exito";
  }
  
  Lenguajes;

  constructor() { 
    this.Lenguajes = [
      {titulo:"Python"},
      {titulo:"Java"},
      {titulo:"C#"},
      {titulo:"C++"},
      {titulo:"JavaScript"},
      {titulo:"Kotli"},
      {titulo:"Swift"},
      {titulo:"PHP"}
    ];
  }

  ngOnInit(): void {
  }

}
