import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";
import { UISCommon } from "../../../UIS-common.module";

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, UISCommon, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
