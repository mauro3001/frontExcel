import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { UISCommon } from "@UIS-common/UIS-common.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material/material.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevModules } from "./store/config/devtool";
import { FormsModule } from "@angular/forms";
import { MatDateFormats } from "@angular/material/core";
import { I18N_UIS } from "@UIS-common/i18n/config/i18n-uis";
import { I18nInterceptorService } from "@UIS-common/interceptors/i18n-interceptor.service";
import { LoadingInterceptorService } from "@UIS-common/interceptors/loading-interceptor.service";
import { LoaderModule } from "@uis/uis-lib";

export const MOMENT_DATE_FORMATS: MatDateFormats = {
  parse: {
    // dateInput: 'DD/MM/YYYY',
    dateInput: ["DD/MM/YYYY"],
  },
  display: {
    // dateInput: 'DD/MM/YYYY',
    dateInput: "DD/MM/YYYY",
    // monthYearLabel: 'MMMM Y',
    monthYearLabel: "YYYY",
    dateA11yLabel: "LL",
    // monthYearA11yLabel: 'MMMM Y',
    monthYearA11yLabel: "YYYY",
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UISCommon,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoaderModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ...I18N_UIS.root,
    ...StoreDevModules,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I18nInterceptorService,
      multi: true,
    },
    ...I18N_UIS.providers,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
