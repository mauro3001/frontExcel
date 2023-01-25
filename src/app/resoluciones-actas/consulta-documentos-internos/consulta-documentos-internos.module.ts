import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConsultaDocumentosInternosRoutingModule } from "./consulta-documentos-internos-routing.module";
import { ConsultaDocumentosInternosComponent } from "./consulta-documentos-internos.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { BusquedaGeneralComponent } from "./components/busqueda-general/busqueda-general.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatTableFullModule } from "@uis/uis-lib";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { I18N_UIS } from "@UIS-common/i18n/config/i18n-uis";
import { FirstUpperCaseModule } from "@UIS-common/pipes/firstUpperCase/first-upper-case.module";
import { UISCommon } from "@UIS-common/UIS-common.module";

@NgModule({
  declarations: [ConsultaDocumentosInternosComponent, BusquedaGeneralComponent],
  imports: [
    CommonModule,
    UISCommon,
    ConsultaDocumentosInternosRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableFullModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    FirstUpperCaseModule,
    ...I18N_UIS.lazy,
  ],
})
export class ConsultaDocumentosInternosModule {}
