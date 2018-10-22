import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-capitulos',
  templateUrl: './lista-capitulos.component.html',
  styleUrls: ['./lista-capitulos.component.css']
})
export class ListaCapitulosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // tslint:disable-next-line:member-ordering
  targetas: Array<any> = [
    { url: '', nombre: 'Terminos de multiplicacion' },
    { url: '', nombre: 'Multiplicando por una cifra' },
    { url: '', nombre: 'Multiplicando 2 cifras por 1' }
  ];

}


