import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateService } from "@ngx-translate/core";
import { catchError, map, of } from "rxjs";
import { SnackbarService } from "@uis/uis-lib";
import { defaultLanguage } from "../config/current-lang";
import { environment } from "src/environments/environment";
import { projectEnvironments } from "src/project-config/project-envs";

/**
 * Implementación del servicio de carga de traducciones.
 */
@Injectable({
  providedIn: "root",
})
export class TranslateLoaderImplService implements TranslateLoader {
  /**
   * Función para validar que un valor sea un json válido.
   *
   * @param value - Valor a validar.
   * @returns - boolean
   */
  private isValidJSON = (value) => {
    try {
      JSON.parse(JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  };

  /**
   * Constructor del servicio.
   *
   * @param http - HttpClient
   * @param snackbar - SnackbarService
   * @param injector: Injector
   */
  constructor(
    private http: HttpClient,
    private snackbar: SnackbarService,
    private injector: Injector
  ) {}

  /**
   * Función para obtener el slug;
   *
   * @returns - Slug del modulo.
   */
  private getSlug() {
    return projectEnvironments.slug;
  }

  /**
   * Obtener la traducción.
   *
   * @param lang - Lenguaje a cargar.
   * @returns - Observable de traducciones.
   */
  getTranslation(lang: string) {
    return this.http
      .get(
        `${environment.urlBackCorePublic}/I18NMensajes/allGeneralAndBy?module=${
          this.getSlug() ?? ""
        }`,
        {
          headers: {
            "next-accept-language": lang,
          },
        }
      )
      .pipe(
        map((el) =>
          this.isValidJSON(el) ? el : this.getDefaultTranslations()
        ),
        catchError(() => {
          this.getDefaultTranslations(defaultLanguage);
          if (lang === defaultLanguage) {
            this.snackbar.show({
              tipo: "error",
              mensaje: "No se pudo cargar el archivo de traducciones.",
            });
          }
          return of(null);
        })
      );
  }

  /**
   * Función para obtener las traducciones por defecto.
   */
  getDefaultTranslations(lang: string = defaultLanguage) {
    const translate = this.injector.get(TranslateService);
    translate.setDefaultLang(lang);
    translate.use(lang);
  }
}
