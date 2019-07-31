import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
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
      title: 'Register',
      url: '/aeauth',
      icon: 'list-box'
    },
    {
      title: 'Bookings',
      url: '/aebookings',
      icon: 'calendar'
    },
    {
      title: 'Places',
      url: '/aeplaces',
      icon: 'photos'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    }
  ];

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
