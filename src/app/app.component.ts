import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'Ambigram',
      url: '/ambigram',
      icon: 'refresh-circle'
    },
    {
      title: 'Family',
      url: '/family',
      icon: 'people'
    },
    {
      title: 'aeauth',
      url: '/aeauth',
      icon: 'airplane'
    },
    {
      title: 'aebookings',
      url: '/aebookings',
      icon: 'boat'
    },
    {
      title: 'aeplaces',
      url: '/aeplaces',
      icon: 'bus'
    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
