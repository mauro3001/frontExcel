export interface Document {
  [key: string]: any;
  acceso: "Público" | string;
  fechaProduccion: string;
  fechaIncorporacion: string;
  formato: string;
  idDocumento: string;
  noPaginas: number;
  noPaginaInicio: number;
  noPaginaFin: number;
  idioma: string;
  serie: string;
  tamano: number;
  enlacePublico: string;
}
