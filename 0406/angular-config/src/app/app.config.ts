import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"exercise-db-60f7a","appId":"1:631840006052:web:25e6db20d4d143afa46b31","storageBucket":"exercise-db-60f7a.appspot.com","apiKey":"AIzaSyDJl1LGJXBDsNEDj7VPBuSWagknSlVRdGQ","authDomain":"exercise-db-60f7a.firebaseapp.com","messagingSenderId":"631840006052"})), provideDatabase(() => getDatabase())]
};
