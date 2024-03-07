import {ApplicationConfig, importProvidersFrom, NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// importaciones propieas
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule} from "@angular/common";


export function createTranslateLoader(http: HttpClient): unknown {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
  TranslateService,
    importProvidersFrom(
      CommonModule,
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage:'es',
        loader:{
          provide: TranslateLoader,
          useFactory:createTranslateLoader,
          deps:[HttpClient]
        }
      })
    )
  ],
};



