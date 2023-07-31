import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { listaNoticias, Noticia } from './Listanoticias';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  position = 0;
  constructor() { }
  noticia: Noticia = new Noticia();
  listNoticia: Noticia[] = [];
  ngOnInit(): void {
    this.noticia = listaNoticias[listaNoticias.length - 1];
    this.listNoticia = listaNoticias.filter((element: Noticia) => element.id != this.noticia.id);
  }
  changeNotice(noticia: Noticia) {
    this.noticia = noticia;
    this.listNoticia = listaNoticias.filter((element: Noticia) => element.id != this.noticia.id);
  }
  moveToPrevSlide() {
    if (this.position === 0) {
      this.position = -200;
    } else {
      this.position += 100;
    }
  }
  moveToNextSlide() {
    if (this.position === -200) {
      this.position = 0;
    } else {
      this.position -= 100;
    }
  }

  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef;
  changeImgCarousel(arriba : boolean)
  {
    const carouselElement: HTMLElement = this.carouselRef.nativeElement;
    let value = carouselElement.style.translate;
    let numeroStr = value.substring(value.lastIndexOf(" ") + 1);
    numeroStr = numeroStr.split("px")[0];
    let numero = Number(numeroStr);

    let translate = arriba ? numero + 220.81 : numero - 220.81;
    translate = translate >= 0 ? 0 : translate;
    
    let mayor = (this.listNoticia.length-1)*-220.81;
    translate = translate <= mayor ? mayor : translate; 

    //carouselElement.style.transform = `translate(${translate}%)`;
    carouselElement.style.translate = `0px ${translate}px`;
    // console.log(carouselElement.style.translate)
  }
}
