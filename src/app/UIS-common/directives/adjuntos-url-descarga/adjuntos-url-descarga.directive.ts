import { Directive } from "@angular/core";
import { environment } from "src/environments/environment";
import { FileChooserComponent } from "@uis/uis-lib";

@Directive({
  selector: "[appAdjuntosUrlDescarga]",
})
export class AdjuntosUrlDescargaDirective {
  constructor(componenteAdjuntos: FileChooserComponent) {
    componenteAdjuntos.urlDownload = `${environment.urlBackHV}/adjunto/download/id/`;
  }
}
