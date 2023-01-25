import { Directive } from "@angular/core";
import { environment } from "src/environments/environment";
import { CiudadChooserComponent } from "@uis/uis-lib";

@Directive({
  selector: "[appCiudadUrlCambio]",
})
export class CiudadUrlCambioDirective {
  constructor(ciudadComponent: CiudadChooserComponent) {
    ciudadComponent.urlBack = `${environment.urlBackHV}/ciudad/suggestionByNombre/`;
    ciudadComponent.urlBackLoad = `${environment.urlBackHV}/ciudad/id/`;
  }
}
