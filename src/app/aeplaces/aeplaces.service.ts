import { Injectable } from '@angular/core';
import { Aeplaces } from './aeplaces.model';

@Injectable({
  providedIn: 'root'
})
export class AeplacesService {
  private _places: Aeplaces[] = [
    new Aeplaces(
      'P1',
      'Universal Studios, Hollywood',
      'California - The Golden State',
      'https://www.universalstudioshollywood.com/wp-content/uploads/2017/05/2000x793_AP_page_image-1761x480.jpg',
      400.40
    ),
    new Aeplaces(
      'P2',
      'The Statue of Liberty',
      'Liberty Island - New York Harbor',
      'https://www.nps.gov/stli/index.htm',
      1200.12
    ),
    new Aeplaces(
      'P2',
      'Washington Monument',
      'National Mall in Washington, D.C',
      'https://www.nationalparks.org/explore-parks/washington-monument',
      888.88
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
