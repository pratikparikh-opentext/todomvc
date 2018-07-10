import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


declare var iw;

if (environment.production) {
  enableProdMode();
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'iw_module_config.json');
xhr.onload = function() {
  if (xhr.status === 200) {
    try {
      const iw:any = window['iw'];
      iw.local.config = JSON.parse(xhr.responseText);
      platformBrowserDynamic().bootstrapModule(AppModule);
    } catch (e) {
      console.error('Failed to parse module config: ', e.toString());
    }
  }
};

xhr.send();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
