import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  currency = 'NZD';

  constructor() { }

  ngOnInit() {


  }

  next() {
    // tslint:disable-next-line: no-unused-expression
    this.slides.slideNext;
  }

  saveAndStart() {

  }

}
