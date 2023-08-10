import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    // this.noticia = listaNoticias[listaNoticias.length - 1];
    this.noticia = listaNoticias[0];
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

  desplazar = 202.19;
  desplazar2 = 35.9;

  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef;
  changeImgCarousel(arriba: boolean) {
    const carouselElement: HTMLElement = this.carouselRef.nativeElement;
    let value = carouselElement.style.translate;
    let numeroStr = value.substring(value.lastIndexOf(" ") + 1);
    numeroStr = numeroStr.split("px")[0];
    let numero = Number(numeroStr);

    let translate = arriba ? numero + this.desplazar : numero - this.desplazar;
    translate = translate >= 0 ? 0 : translate;

    let mayor = ((this.listNoticia.length - 1) * - this.desplazar) + (this.desplazar * 2);
    translate = translate <= mayor ? mayor : translate;

    //carouselElement.style.transform = `translate(${translate}%)`;
    carouselElement.style.translate = `0px ${translate}px`;
    // console.log(carouselElement.style.translate)
  }

  @ViewChild('carousel2', { static: false }) carouselRef2!: ElementRef;
  changeImgCarousel2(izquierda: boolean) {
    const carouselElement: HTMLElement = this.carouselRef2.nativeElement;
    let value = carouselElement.style.translate;
    let numero = Number(value.split("%")[0]);
    //console.log(numero);
    let translate = izquierda ? numero + this.desplazar2 : numero - this.desplazar2;
    translate = translate >= 0 ? 0 : translate;
    //console.log(translate)
    let mayor = ((this.noticia.fotos.length - 1) * - this.desplazar2) + (this.desplazar2 * 2);
    //console.log("mayor: " + mayor);
    //console.log("translate: " + translate);
    //console.log("->: " + (this.desplazar2 * 2));
    translate = translate <= mayor ? mayor : translate;

    //carouselElement.style.transform = `translate(${translate}%)`;
    carouselElement.style.translate = `${translate}%`;
    // console.log(carouselElement.style.translate)
  }

  leerBoolean = true;

  leerMas() {
    if (!this.leerBoolean) return;
    // console.log(this.noticia);

    const p = document.getElementById('descripcion');
    if (p == null) return;
    this.leerBoolean = false;
    p.style.maxHeight = "none";
    p.style.overflow = "visible";

  }

  leerMenos() {
    if (this.leerBoolean) return;

    const p = document.getElementById('descripcion');
    if (p == null) return;
    this.leerBoolean = true;
    p.style.maxHeight = "600px";
    p.style.overflow = "visible";

  }
}

