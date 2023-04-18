import { Component, OnInit } from '@angular/core';
import { listaNoticias, Noticia } from './listanoticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  noticia : Noticia = new Noticia();
  listNoticia : Noticia[] = [];

  ngOnInit(): void 
  {
    this.noticia = listaNoticias[listaNoticias.length - 1];
    this.listNoticia = listaNoticias.filter((element : Noticia) => element.id != this.noticia.id);
  }

  changeNotice(noticia : Noticia)
  {
    this.noticia = noticia;
    this.listNoticia = listaNoticias.filter((element : Noticia) => element.id != this.noticia.id);
  }

}
