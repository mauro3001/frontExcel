import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "firstUpperCase",
})
export class FirstUpperCasePipe implements PipeTransform {
  transform(words: string, _args: any[]): unknown {
    return words ? words[0].toUpperCase() + words.slice(1).toLowerCase() : "";
  }
}
