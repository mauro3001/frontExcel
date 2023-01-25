import { Document } from "./document.model";

export interface ResponseDocuments {
  [key: string]: any;
  numeroEncontrado: number;
  documentos: Document[];
}
