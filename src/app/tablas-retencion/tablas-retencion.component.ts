import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { ValidatorsUIS, SnackbarService } from "@uis/uis-lib";
import { fileType } from "@UIS-common/validators/file-type-validators";

@Component({
  selector: "app-tablas-retencion",
  templateUrl: "./tablas-retencion.component.html",
  styleUrls: ["./tablas-retencion.component.scss"],
})
export class TablasRetencionComponent implements OnInit, OnDestroy {
  @Input() editMode: boolean;
  @Input() viewMode: boolean;
  /**
   * Emisor usado unicamente cuando se encuentra un familiar en BD al registrar y debo cambiar el modo de los demás forms.
   */
  @Output() modeEmitter = new EventEmitter<
    "viewMode" | "editMode" | "insertMode"
  >();
  //servicios inyectados dinamicamente
  private snackbar: SnackbarService;

  //declaraciones
  form: UntypedFormGroup;
  file: any;
  limpiarArchivos = false;

  /**
   * Para poder limpiar formulario
   */
  cleanForm = false;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.buildForm();
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    this.editMode = true;
    this.modeEmitter.emit("editMode");
    throw new Error("Method not implemented.");
  }

  buildForm(): void {
    this.file = null;
    this.limpiarArchivos = !this.limpiarArchivos;
    this.form = this.formBuilder.group({
      adjuntoFileDocument: [
        null,
        [
          ValidatorsUIS.maxFileSize(10000000),
          fileType(["image/png", "image/jpeg", "image/jpg", "application/pdf"]),
        ],
      ],
    });
  }

  saveDocumento(form: UntypedFormBuilder): void {
    if (this.form.valid) {
      this.saveDocumento(form);
      this.snackbar.show({
        mensaje: "documento subido con exito",
        tipo: "warning",
      });
    } else {
      this.form.markAllAsTouched();
      this.snackbar.show({
        mensaje: "problema",
        tipo: "error",
      });
    }
  }

  obtenerArchivos($event: any) {
    this.file = $event.target.files[0];
    this.form.controls.adjuntoFileDocument.setValue(this.file);
    this.form.controls.adjuntoFileDocument.markAllAsTouched();
    console.log("file", this.file);
  }

  limpiarFormulario() {
    this.form.reset();
    this.cleanForm = true;
  }

  buscar() {}
}
