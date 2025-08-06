import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { getApp } from '@angular/fire/app';
import {
  ReCaptchaEnterpriseProvider,
  initializeAppCheck,
  provideAppCheck,
} from '@angular/fire/app-check';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // Firebase Initialization
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    // Firebase Modules
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),

    // 🔐 App Check (with debug support via globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN)
    provideAppCheck(() =>
      initializeAppCheck(getApp(), {
        provider: new ReCaptchaEnterpriseProvider(
          '6LdBqZwrAAAAALvjyGYyKlheUgRcwlnLvaQz5pQs'
        ), // or use ReCaptchaV3Provider
        isTokenAutoRefreshEnabled: true,
      })
    ),
  ],
};
