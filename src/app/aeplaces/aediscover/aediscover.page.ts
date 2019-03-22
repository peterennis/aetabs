import { Component, OnInit } from '@angular/core';

import { Aeplaces } from '../aeplaces.model';
import { AeplacesService } from '../aeplaces.service';

@Component({
  selector: 'app-aediscover',
  templateUrl: './aediscover.page.html',
  styleUrls: ['./aediscover.page.scss'],
})
export class AediscoverPage implements OnInit {
  loadedPlaces: Aeplaces[];

  constructor(private myPlacesService: AeplacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.myPlacesService.places;
  }

}
