import * as XLSX from "xlsx";

const getFileName = (name: string) => {
  const timeSpan = new Date().toISOString();
  const sheetName = name || "ExportResult";
  const fileName = `${sheetName}-${timeSpan}`;
  return {
    sheetName,
    fileName,
  };
};
export class TableUtil {
  static exportTableToExcel(tableId: string, name?: string) {
    const { sheetName, fileName } = getFileName(name);
    const targetTableElm = document.getElementById(tableId);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
      sheet: sheetName,
    });
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  static exportArrayToExcel(arr: any[], name?: string) {
    const { sheetName, fileName } = getFileName(name);

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
