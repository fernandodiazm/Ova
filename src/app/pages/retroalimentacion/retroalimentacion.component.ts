import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retroalimentacion',
  templateUrl: './retroalimentacion.component.html',
  styleUrls: ['./retroalimentacion.component.css']
})
export class RetroalimentacionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // tslint:disable-next-line:member-ordering
  ejercicios: Array<any> = [
    { url: '../../../assets/pdf/1 cifra.pdf', nombre: 'sdf' },
    { url: '../../../assets/pdf/1 cifra.pdf' },
    { url: '../../../assets/pdf/1 cifra.pdf' }
  ];

}
