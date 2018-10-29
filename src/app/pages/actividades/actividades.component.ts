import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  targetas: Array<any> = [
    { url: './cap1', nombre: 'Terminos de multiplicacion' },
    { url: './cap2', nombre: 'Multiplicando por una cifra' },
    { url: './cap3', nombre: 'Multiplicando 2 cifras por 1' }
  ];

}
