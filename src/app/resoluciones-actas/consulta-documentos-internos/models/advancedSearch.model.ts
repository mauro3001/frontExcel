export interface advancedSearch {
  serie: string;
  numeroDocumento: number;
  anioDocumento: number;
  subserie: string;
  skipCount: number;
  maxItems: number;
  rangoFecha: {
    fechaDesde: Date;
    fechaHasta: Date;
  };
}
