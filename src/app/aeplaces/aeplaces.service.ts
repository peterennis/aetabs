import { Injectable } from '@angular/core';

import { Aeplaces } from './aeplaces.model';

@Injectable({
  providedIn: 'root'
})
export class AeplacesService {
  private _places: Aeplaces[] = [];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
