import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  FASTButton, FASTCard, FASTDesignSystemProvider
} from '@microsoft/fast-components';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*
 * Ensure the components are not removed from the bundle.
 */
FASTDesignSystemProvider;
FASTCard;
FASTButton;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
