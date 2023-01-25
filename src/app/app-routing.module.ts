import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  ExtraOptions,
} from "@angular/router";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 64],
  preloadingStrategy: PreloadAllModules,
  relativeLinkResolution: "legacy",
};
const routes: Routes = [
  {
    path: "",
    redirectTo: "/resolucionesyactas/busqueda",
    pathMatch: "full",
  },
  {
    path: "resolucionesyactas",
    loadChildren: () =>
      import("./resoluciones-actas/resoluciones-actas.module").then(
        (m) => m.ResolucionesActasModule
      ),
  },
  {
    path: "tablas",
    loadChildren: () =>
      import("./tablas-retencion/tablas-retencion.module").then(
        (m) => m.TablasRetencionModule
      ),
  },
  {
    path: "consulta-documentos-internos",
    loadChildren: () =>
      import(
        "./resoluciones-actas/consulta-documentos-internos/consulta-documentos-internos.module"
      ).then((m) => m.ConsultaDocumentosInternosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
