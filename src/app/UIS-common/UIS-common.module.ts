import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ExponentialPipe } from "./pipes/exponential/exponential.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// eslint-disable-next-line max-len
import { SearchPipe } from "./pipes/search/search.pipe";
// eslint-disable-next-line max-len
import { SearchWithComodinPipe } from "./pipes/searchWithComodin/search-with-comodin.pipe";
// eslint-disable-next-line max-len
import {
  CiudadChooserModule,
  ConfirmModule,
  CrudDialogModule,
  FileChooserModule,
  MatSelectTwoModule,
} from "@uis/uis-lib";
import { CiudadUrlCambioDirective } from "./directives/ciudad-url-cambio/ciudad-url-cambio.directive";
import { AdjuntosUrlDescargaModule } from "./directives/adjuntos-url-descarga/adjuntos-url-descarga.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    ExponentialPipe,
    SearchPipe,
    SearchWithComodinPipe,
    CiudadUrlCambioDirective,
  ],
  exports: [
    ExponentialPipe,
    SearchPipe,
    SearchWithComodinPipe,
    CiudadUrlCambioDirective,
    FileChooserModule, //LIBRERIA
    CiudadChooserModule, //LIBRERIA
    ConfirmModule, //LIBRERIA
    CrudDialogModule, //LIBRERIA
    MatSelectTwoModule, //LIBRERIA
    AdjuntosUrlDescargaModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FileChooserModule, //LIBRERIA
    CiudadChooserModule, //LIBRERIA
    ConfirmModule, //LIBRERIA
    CrudDialogModule, //LIBRERIA
    MatSelectTwoModule,
    AdjuntosUrlDescargaModule, //LIBRERIA
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class UISCommon {}
