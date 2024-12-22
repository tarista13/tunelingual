import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"tunelingual-45145","appId":"1:395215832723:web:9a446158484834dc22ef66","storageBucket":"tunelingual-45145.firebasestorage.app","apiKey":"AIzaSyBnhu0D35BKsurEA_Tj8i6yR6dkyFeIgDU","authDomain":"tunelingual-45145.firebaseapp.com","messagingSenderId":"395215832723","measurementId":"G-MDD823TMPH"})), provideFirestore(() => getFirestore())]
};
