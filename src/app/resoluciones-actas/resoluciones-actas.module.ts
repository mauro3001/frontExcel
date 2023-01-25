import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResolucionesActasRoutingModule } from "./resoluciones-actas-routing.module";
import { ResolucionesActasComponent } from "./resoluciones-actas.component";
import { SharedModule } from "./shared/shared.module";
import { I18N_UIS } from "@UIS-common/i18n/config/i18n-uis";

@NgModule({
  declarations: [ResolucionesActasComponent],
  imports: [
    CommonModule,
    ResolucionesActasRoutingModule,
    SharedModule,
    ...I18N_UIS.lazy,
  ],
})
export class ResolucionesActasModule {}
