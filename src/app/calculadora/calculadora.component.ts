import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  NumeroUno:number= 0; 
  NumeroDos:number= 0; 
  NumeroResultado:number= 0; 

  getSuma():void{
    this.NumeroResultado = this.NumeroUno + this.NumeroDos;
  }
  getRestar():void{
    this.NumeroResultado = this.NumeroUno - this.NumeroDos;
  }
  getMult():void{
    this.NumeroResultado = this.NumeroUno * this.NumeroDos;
  }
  getDiv():void{
    this.NumeroResultado = this.NumeroUno / this.NumeroDos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
