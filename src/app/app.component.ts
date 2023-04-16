import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from "aos";

@Component({
  selector: 'app-root',
  template: '<app-header (click)="playSound()"></app-header><router-outlet></router-outlet><app-footer></app-footer>'
})
export class AppComponent {
  title = 'probisa-page';
  yaSonando = false;
  onWindowScrolled: boolean = false;
  constructor(private translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    translate.addLangs(['es', 'en']);
    AOS.init();
  }

  playSound() {
    // console.log("entro");

    if (this.yaSonando) return
    let audio = new Audio();
    audio.src = '../assets/sound/playsound.mp3';
    audio.load();
    audio.play();
    this.yaSonando = true;
  };

}