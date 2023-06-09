import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TRANSLATE_CONFIG } from './code/consts/translante-config.const';
import localeEsCL from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, ReCaptchaV3Service } from "ng-recaptcha";
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localeEsCL, "es-CL");


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    HttpClientModule,
    RecaptchaV3Module,
    TranslateModule.forRoot(TRANSLATE_CONFIG)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-CL" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: '$' },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Le_LjwiAAAAAGMyZ135Ohl6hdXDMwnRyBDbu6XD" },
    ReCaptchaV3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
