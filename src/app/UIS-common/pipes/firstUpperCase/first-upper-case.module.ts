import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FirstUpperCasePipe } from "./first-upper-case.pipe";

@NgModule({
  declarations: [FirstUpperCasePipe],
  imports: [CommonModule],
  exports: [FirstUpperCasePipe],
})
export class FirstUpperCaseModule {}
