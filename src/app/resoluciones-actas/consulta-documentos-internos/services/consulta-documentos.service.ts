import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SnackbarService } from "@uis/uis-lib";
import * as moment from "moment";
import { catchError, map, of } from "rxjs";
import { environment } from "src/environments/environment";
import { advancedSearch } from "../models/advancedSearch.model";
import { Document } from "../models/document.model";
import { Entity } from "../models/entity.model";
import { ResponseDocuments } from "../models/res-documents.model";
import { Search } from "../models/search.model";

@Injectable({
  providedIn: "root",
})
export class ConsultaDocumentosService {
  documents: any[];
  maxItems = 1000;
  skipCount = 0;
  search: Search;
  advancedForm: advancedSearch;

  constructor(private http: HttpClient, private snackbar: SnackbarService) {}

  /**
   * procesa los documentos para mostrarlos en la tabla
   * @param documents documentos consultados
   * @returns
   */
  parseDocumentsResponse(documents) {
    const parsedDocuments = documents.map((document: Document) => {
      document.serieDocumental = `${document.codSerie} ${document.serie}`;
      document.noPagina = document.noPaginas;
      document.fechaProduccion = moment(document.fechaIncorporacion).format(
        "D/MM/YYYY"
      );
      return document;
    });
    return parsedDocuments;
  }

  /**
   * Función para realizar búsqueda de documentos por palabras clave
   * @param keywords palabras por las que se va a buscar
   * @returns
   */
  generalSearch(searchTerms: string) {
    this.search = {
      searchTerms: searchTerms,
      skipCount: this.skipCount,
      maxItems: this.maxItems,
    };
    return this.http
      .post<ResponseDocuments>(
        `${environment.urlBackResolucionesYActasPublic}/alfresco/keywordsearch`,
        this.search
      )
      .pipe(
        map((res) =>
          res.documentos && res.documentos.length > 0
            ? this.parseDocumentsResponse(res.documentos)
            : []
        ),
        catchError((err) => {
          this.snackbar.showBackError(err);
          return of(null);
        })
      );
  }

  /**
   * Función para realizar búsqueda de documentos avanzada
   * @param serie serie del documento
   * @param subserie subserie del documento
   * @param numeroDocumento número de publicación del documento
   * @param anioDocumento año de expedición del documento
   * @param fechaDesde fecha de busqueda inicial
   * @param fechaHasta fecha de busqueda final
   * @returns
   */
  advancedSearch(
    serie,
    subserie,
    numeroDocumento: number,
    rangoFecha: { fechaDesde: Date; fechaHasta: Date }
  ) {
    this.advancedForm = {
      serie: serie,
      subserie: subserie,
      numeroDocumento: numeroDocumento,
      anioDocumento: null,
      skipCount: this.skipCount,
      maxItems: this.maxItems,
      rangoFecha: rangoFecha,
    };
    return this.http
      .post<ResponseDocuments>(
        `${environment.urlBackResolucionesYActasPublic}/alfresco/advancesearch
        `,
        this.advancedForm
      )
      .pipe(
        map((res) =>
          res.documentos && res.documentos.length > 0
            ? this.parseDocumentsResponse(res.documentos)
            : []
        ),
        catchError((err) => {
          this.snackbar.showBackError(err);
          return of(null);
        })
      );
  }

  /**
   * Función para obtener las entidades emisoras
   * @returns
   */
  getIssuingEntities() {
    return this.http
      .get<Entity[]>(
        `${environment.urlBackResolucionesYActasPublic}/alfresco/seriepublica`
      )
      .pipe(
        map((res) =>
          res.map((entity) => {
            entity.nombreCompleto = `${entity.codigo ?? ""} ${
              entity.nombre ?? ""
            }`;
            return entity;
          })
        ),
        catchError((err) => {
          this.snackbar.showBackError(err);
          return of(null);
        })
      );
  }
}
