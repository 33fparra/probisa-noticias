import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class ActividadesComponent implements OnInit {
  bounce: any;
  slides = [{
    year: '1995', img: 'i1995.jpg', title: 'Apertura Planta Santiago', text: ''
  }, {
    year: '2009', img: 'i2009.jpg', title: 'Compra del 20% de acciones en DASA, estanques ubicados en Refinería Aconcagua ENAP.', text: ''
  }, {
    year: '2010', img: 'i2010.jpg', title: 'Primera Importación de Asfalto por vía marítima', text: ''
  }, {
    year: '2011', img: 'i2011.jpg', title: 'Apertura de la Planta/Terminal en Mejillones, Segunda región de Antofagasta', text: 'Para importar y abastecer el mercado del norte del país'
  }, {
    year: '2018', img: 'i2018.jpg', title: 'Adquisición de Planta Talcahuano, VIII Región.', text: 'Donde distribuye sus productos para la zona sur.'
  }, {
    year: '2019', img: 'i2019.jpg', title: 'Inicio de Construcción de la Planta/Terminal de Arica, XV Región.', text: ''
  }, {
    year: '2019', img: 'i2019b.jpg', title: 'Adquisición del 50% de las acciones del Terminal Conosur, V Región.', text: ''
  }, {
    year: '2022', img: 'i2022.jpg', title: 'Primer vogage charter', text: 'Primer arriendo de buque tanquero de asfalto de 12.000 TM de capacidad para la ruta USA-CHILE.'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
