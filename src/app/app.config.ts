import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './store/User.Reducer';
import {  userEffect } from './store/User.Effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), provideStore({'userrecord':userReducer}),
    provideEffects([userEffect]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })],
  

};
