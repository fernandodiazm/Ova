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
    { url: '', nombre: 'soy 1' },
    { url: '', nombre: 'soy 2' },
    { url: '', nombre: 'soy 3' }
  ];

}


