import { Component, OnInit, ViewChild } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from "@angular/material-moment-adapter";

import { MOMENT_DATE_FORMATS } from "src/app/app.module";
import { MatTableDataSource } from "@angular/material/table";
import { MatTableFullComponent, SnackbarService } from "@uis/uis-lib";
import { MatTableFullOptions } from "@uis/uis-lib/lib/models/mat-table-full/mat-table-full-option.model";
import { ConsultaDocumentosService } from "../../services/consulta-documentos.service";
import { MatDatepicker } from "@angular/material/datepicker";
import * as moment from "moment";
import { Document } from "../../models/document.model";
import { TranslateService } from "@ngx-translate/core";

interface FechaRango {
  fechaDesde: Date;
  fechaHasta: Date;
}
@Component({
  selector: "app-busqueda-general",
  templateUrl: "./busqueda-general.component.html",
  styleUrls: ["./busqueda-general.component.scss"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MOMENT_DATE_FORMATS,
    },
  ],
})
export class BusquedaGeneralComponent implements OnInit {
  /**
   * Ref a la tabla de documentos
   */
  @ViewChild("tabla", { static: false }) table: MatTableFullComponent;
  /**
   * Si se ha presionado el botón buscar
   */
  didSearch = false;
  /**
   * Le dio clic en el botón de limpiar formulario
   */
  didClearForm = false;
  /**
   * No se encontró ningun documento
   */
  noDocumentsFound = false;
  /**
   * Si se está en busqueda avanzada o no
   */
  advancedMode = false;
  /**
   * no se ha llenado ningun campo en busqueda avanzada
   */
  notFields: boolean;
  /**
   * Inicializacion de una fecha
   */
  today: Date = new Date();
  /**
   * Entidades emisoras
   */
  entities: any[] = [];
  /**
   * Definiendo valores predeterminados para skipCount y maxItems
   */
  skipCount = 0;
  maxItems = 1000;

  formMaxWidth: any = "950px";
  /**
   * Opciones de la tabla de documentos
   */
  optionsTable: MatTableFullOptions = {
    defaultData: [],
    hasFilter: true,
    keys: [
      "numero",
      "serieDocumental",
      "nombreDocumento",
      "fechaProduccion",
      "noPagina",
    ],
    labelColumns: [
      this.translate.get("MODULES.SEARCH.FOUND_DOCUMENTS.NUMBER_COLUMN"),
      this.translate.get(
        "MODULES.SEARCH.FOUND_DOCUMENTS.DOCUMENTARY_SERIES_COLUMN"
      ),
      this.translate.get(
        "MODULES.SEARCH.FOUND_DOCUMENTS.DOCUMENT_TITLE_COLUMN"
      ),
      this.translate.get("MODULES.SEARCH.FOUND_DOCUMENTS.CREATION_DATE_COLUMN"),
      this.translate.get("MODULES.SEARCH.FOUND_DOCUMENTS.NUMBER_PAGES_COLUMN"),
    ],
    alignmentColumns: ["right", "left", "left", "center", "right"],
    widthColumns: ["15%", null, null, "15%", "15%"],
    hasActions: true,
    hideButtons: {
      add: true,
      delete: true,
      edit: true,
    },
    disableActionsConditions: {
      view: {
        condition: (row: Document) => row.enlacePublico.split("/s/")[1] === "",
      },
    },
  };
  /**
   * formulario para la consulta
   */
  form: UntypedFormGroup;
  /**
   * formulario para la consulta avanzada
   */
  formAdvancedSearch: UntypedFormGroup;

  /**
   * Min fecha para el datepicker del año de expedición
   */
  minDate: Date;
  /**
   * Max fecha para el datepicker del año de expedición
   */
  maxDate: Date;
  /**
   * Min cantidad de años para el documento
   */
  minDateYearsAgo = 87;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private consultaDocumentosService: ConsultaDocumentosService,
    private snackbar: SnackbarService,
    private translate: TranslateService
  ) {
    const TODAY = new Date();
    this.minDate = new Date(
      TODAY.getFullYear() - this.minDateYearsAgo,
      TODAY.getMonth(),
      TODAY.getDate()
    );
    this.maxDate = TODAY;
  }

  ngOnInit(): void {
    this.buildForm();
    /**
     * Si ya se ha realizado alguna busqueda, carga los datos de dicha busqueda
     */
    if (
      this.consultaDocumentosService.documents &&
      this.consultaDocumentosService.documents.length > 0
    ) {
      this.loadDataInTable(this.consultaDocumentosService.documents);
    }
  }

  /**
   * Método para visualizar un concepto-ajuste.
   */
  view(row: Document) {
    const win = window.open(row.enlacePublico);
    if (win) {
      win.focus();
    }
  }

  /**
   * Realiza búsqueda general
   * @returns
   */
  search() {
    if (this.advancedMode) {
      this.advancedSearch();
      return;
    }

    if (this.form.invalid) return;

    const keywords = this.form.get("palabrasClave").value;
    if (!keywords || keywords === "") {
      this.form.get("palabrasClave").markAsTouched();
      return;
    }
    this.consultaDocumentosService.generalSearch(keywords).subscribe((res) => {
      if (!res) {
        return;
      }
      this.didSearch = true;
      if (res.length === 0) {
        this.noDocumentsFound = true;
        return;
      }
      this.formMaxWidth = "100%";
      this.consultaDocumentosService.documents = res;
      this.loadDataInTable(res);
    });
  }

  /**
   * Definiendo los parametros de rangoFecha
   */
  fecha: FechaRango;
  /**
   * Realiza búsqueda avanzada
   * @returns
   */
  advancedSearch() {
    if (this.formAdvancedSearch.invalid) return;
    if (
      !this.formAdvancedSearch.get("entidadEmisora").value &&
      !this.formAdvancedSearch.get("numeroPublicacion").value &&
      !this.formAdvancedSearch.get("anoExpedicion").value &&
      !this.formAdvancedSearch.get("dateInitial").value &&
      !this.formAdvancedSearch.get("dateFinal").value
    ) {
      this.notFields = true;
      return;
    } else if (this.notFields) {
      this.notFields = false;
    }
    let serie: string;
    let subserie: string;
    if (this.formAdvancedSearch.get("entidadEmisora").value) {
      const entity2 = this.entities.find(
        (entity) =>
          entity.id === this.formAdvancedSearch.get("entidadEmisora").value
      );

      if (entity2.codigo.includes(".")) {
        serie = entity2.codigo.split(".")[0];
        subserie = entity2.codigo;
      } else {
        serie = entity2.codigo;
      }
    }
    /**
     * Filtrando rango fecha por si sus valores son nulos
     */
    let fechaDesde = this.formAdvancedSearch.get("dateInitial")?.value;
    let fechaHasta = this.formAdvancedSearch.get("dateFinal")?.value;
    if (fechaDesde != null && fechaHasta != null) {
      this.fecha = {
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
      };
    } else {
      this.fecha = null;
    }
    this.consultaDocumentosService
      .advancedSearch(
        serie,
        subserie,
        this.formAdvancedSearch.get("numeroPublicacion").value,
        this.fecha
      )
      .subscribe({
        next: (res) => {
          if (!res) {
            return;
          }
          this.didSearch = true;
          if (res.length === 0) {
            this.noDocumentsFound = true;
            return;
          }
          this.formMaxWidth = "100%";
          this.consultaDocumentosService.documents = res;
          this.loadDataInTable(res);
          this.didClearForm = false;
        },
        error: (err) => this.snackbar.showBackError(err),
      });
  }

  /**
   * Carga los datos en la tabla
   * @param data
   */
  loadDataInTable(data: any[]) {
    this.table.dataSource = new MatTableDataSource(data);
    this.table.dataSource.paginator = this.table.paginator;
    this.table.dataSource.sort = this.table.sort;
  }

  /**
   * Intercambia el modo del buscador
   * @param value
   */
  toggleSearchMode(value: boolean) {
    if (value) {
      if (!this.formAdvancedSearch) {
        this.buildFormAdvancedSearch();
      }
      this.advancedMode = true;
    } else {
      this.advancedMode = false;
      if (!this.form) {
        this.buildForm();
      }
    }
  }

  /**
   * Función que se llama al presioanr el botón de "Volver"
   */
  goBack() {
    this.formMaxWidth = "950px";
    this.didClearForm = false;
    this.notFields = false;

    if (this.formAdvancedSearch && this.advancedMode) {
      this.formMaxWidth = "950px";
      this.formAdvancedSearch.reset();
    }

    if (this.didSearch) {
      this.didSearch = false;
      this.advancedMode = false;
      this.form?.reset();
    } else {
      this.advancedMode = false;
    }
  }

  /**
   * Cierra el datepicker cuando se selecciona un año
   * @param ev
   * @param datepicker
   */
  chosenYearHandler(ev: moment.Moment, datepicker?: MatDatepicker<any>) {
    this.formAdvancedSearch.get("anoExpedicion").setValue(ev);
    datepicker?.close();
  }

  /**
   * Construye el formulario para la búsqueda general
   * @returns
   */
  buildForm() {
    if (this.advancedMode) {
      this.buildFormAdvancedSearch();
      return;
    }
    this.form = this.formBuilder.group({
      palabrasClave: ["", Validators.required],
    });
  }

  /**
   * Construye el formulario para la búsqueda avanzada
   */
  buildFormAdvancedSearch() {
    this.formAdvancedSearch = this.formBuilder.group({
      entidadEmisora: [null],
      numeroPublicacion: [
        null,
        [Validators.min(1), Validators.pattern(/^\d+$/)],
      ],
      anoExpedicion: [null],
      dateInitial: [null, this.maxDate],
      dateFinal: [null, this.maxDate],
    });

    this.consultaDocumentosService.getIssuingEntities().subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this.entities = (res as any[]).map((serie) => {
          serie.displayName = serie.nombreCompleto.substring(
            serie.nombreCompleto.indexOf(" ") + 1
          );
          return serie;
        });
      },
      error: (err) => this.snackbar.showBackError(err),
    });

    /**
     * Escucha a los cambios en el formulario para detectar si se ha
     * seleccionado al menos algun criterio para buscar
     */
    this.formAdvancedSearch.valueChanges.subscribe((value) => {
      if (
        Object.keys(value).some(
          (key) =>
            this.formAdvancedSearch.get(key).valid &&
            this.formAdvancedSearch.get(key).value &&
            this.formAdvancedSearch.get(key).value !== ""
        ) &&
        this.notFields
      ) {
        this.notFields = false;
      }
    });
  }
}
