import { Pipe, PipeTransform } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Pipe({
  name: "searchWithComodin",
})
export class SearchWithComodinPipe implements PipeTransform {
  replaceAll(str: string, searchString: string, replaceString: string) {
    return str?.split(searchString).join(replaceString);
  }

  removeAccents(str: string) {
    return str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  transform(
    array: MatTableDataSource<any> | any,
    busqueda: string,
    paginator?: MatPaginator,
    sort?: MatSort
  ): MatTableDataSource<any> | any {
    busqueda = this.replaceAll(busqueda?.toLowerCase(), "*", ".");
    const regex = new RegExp(this.removeAccents(busqueda));
    if (sort && paginator && array && busqueda !== "") {
      const tabla = new MatTableDataSource(
        array?.data.filter(
          (el) =>
            this.removeAccents(
              Object.values(el).join(" ")?.toLowerCase()
            ).match(regex)
          // Object.values(el).join(' ')?.toLowerCase().match(regex)
        )
      );
      tabla.sort = sort;
      tabla.paginator = paginator;
      return tabla;
    } else {
      if (array && busqueda !== "") {
        const tabla = array.filter((el) =>
          this.removeAccents(Object.values(el).join(" ")?.toLowerCase()).match(
            regex
          )
        );
        return tabla;
      }
      return array;
    }
  }
}
