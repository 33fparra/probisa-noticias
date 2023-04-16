import { Component, OnInit, ViewChild } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flagvideo = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  open(showvideo: any) {
   showvideo.checked = !showvideo.checked;
   this.flagvideo = !this.flagvideo;
  }

}
