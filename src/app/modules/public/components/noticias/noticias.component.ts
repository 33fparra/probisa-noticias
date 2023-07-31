import { Component, OnInit } from '@angular/core';
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
}
