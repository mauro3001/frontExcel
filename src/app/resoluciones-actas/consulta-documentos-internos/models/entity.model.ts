export interface Entity {
  [key: string]: any;
  id: number;
  codigo: string;
  nombre: string;
  idTipoAcceso: number;
  unidadPPTL: {
    id: number;
    codigo: string;
    nombre: string;
  };
}
