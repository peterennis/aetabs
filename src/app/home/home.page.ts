import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor() { }

  doLogin() {
    console.log('HomePage.doLogin');
  }

  doStars() {
    // Ref: http://www.petercollingridge.co.uk/tutorials/svg/animation/starfield/

    const svgDocument = document.getElementById('starfield');
    const svgNS = 'http://www.w3.org/2000/svg';
    const xlinkNS = 'http://www.w3.org/1999/xlink';

    const angles = [];
    const distances = [];
    const nStars = 32;

    const centerX = +svgDocument.getAttributeNS(null, 'width') / 2;
    const centerY = +svgDocument.getAttributeNS(null, 'height') / 2;
    const maxD = Math.sqrt(centerX * centerX + centerY * centerY) + 40;

    createStars(nStars);
    beginAnimation();

    function createStars(n) {
      for (let i = 1; i <= n; i++) {
        const star = document.createElementNS(svgNS, 'use');
        star.setAttributeNS(null, 'id', 'star' + i);
        star.setAttributeNS(xlinkNS, 'href', '#star');
        document.getElementById('star-group').appendChild(star);
        angles.push(Math.PI * 2 * Math.random());
        distances.push(maxD * Math.random());
      }
    }

    function drawField() {
      for (let i = 0; i < nStars; i++) {
        const star = document.getElementById('star' + (i + 1));
        const d = distances[i];
        const x = centerX + d * Math.sin(angles[i]);
        const y = centerY + d * Math.cos(angles[i]);
        const scale = 2 * (1 - maxD / (d + maxD));

        star.setAttributeNS(
          null,
          'transform',
          'translate(' + x + ',' + y + ') scale(' + scale * scale + ')'
        );
      }
    }

    function updateImage() {
      for (let i = 0; i < nStars; i++) {
        distances[i]++;
        if (distances[i] > maxD) {
          distances[i] = 0;
        }
      }
      drawField();
    }

    function beginAnimation() {
      const timeout = setInterval(updateImage, 10);
    }
  }

  ngOnInit() {
    console.log('ngOnInit ');
    this.doStars();
  }
}
