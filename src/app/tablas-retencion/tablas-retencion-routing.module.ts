import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TablasRetencionComponent } from "./tablas-retencion.component";

const routes: Routes = [
  {
    path: "",
    component: TablasRetencionComponent,
    children: [
      {
        path: "",
        redirectTo: "tablas",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablasRetencionRoutingModule {}
