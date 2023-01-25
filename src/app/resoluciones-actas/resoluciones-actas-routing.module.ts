import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResolucionesActasComponent } from "./resoluciones-actas.component";

const routes: Routes = [
  {
    path: "",
    component: ResolucionesActasComponent,
    children: [
      {
        path: "",
        redirectTo: "busqueda",
        pathMatch: "full",
      },
      {
        path: "busqueda",
        loadChildren: () =>
          import(
            "./consulta-documentos-internos/consulta-documentos-internos.module"
          ).then((m) => m.ConsultaDocumentosInternosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResolucionesActasRoutingModule {}
