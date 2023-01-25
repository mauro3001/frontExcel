import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsultaDocumentosInternosComponent } from "./consulta-documentos-internos.component";

const routes: Routes = [
  { path: "", component: ConsultaDocumentosInternosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaDocumentosInternosRoutingModule {}
