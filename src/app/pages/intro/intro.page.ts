import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  currency = 'NZD';

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {


  }

  next() {
    // tslint:disable-next-line: no-unused-expression
    this.slides.slideNext;
  }

  async saveAndStart() {
    await this.storage.set('seen-intro', true);
    await this.storage.set('selected-currency', this.currency);

    this.router.navigateByUrl('/');

  }

}
