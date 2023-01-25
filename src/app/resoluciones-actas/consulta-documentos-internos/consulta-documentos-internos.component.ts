import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from "@angular/core";
import { BusquedaGeneralComponent } from "./components/busqueda-general/busqueda-general.component";

@Component({
  selector: "app-consulta-documentos-internos",
  templateUrl: "./consulta-documentos-internos.component.html",
  styleUrls: ["./consulta-documentos-internos.component.scss"],
})
export class ConsultaDocumentosInternosComponent implements AfterViewInit {
  @ViewChild(BusquedaGeneralComponent)
  busquedaComponent: BusquedaGeneralComponent;
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  goBack() {
    this.busquedaComponent.goBack();
  }
}
