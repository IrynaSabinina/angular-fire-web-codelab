import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
// main.ts
declare global {
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
