import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

// https://medium.com/an-idea/export-excel-files-client-side-5b3cc5153cf7

const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
// Desired file extesion
const fileExtension = ".xlsx";

export const arrayToExcel = (data, fileName) => {
    //Create a new Work Sheet using the data stored in an Array of Arrays.
    const workSheet = XLSX.utils.aoa_to_sheet(data);
    // Generate a Work Book containing the above sheet.
    const workBook = {
        Sheets: { data: workSheet, cols: [] },
        SheetNames: ["data"],
    };
    // Exporting the file with the desired name and extension.
    const excelBuffer = XLSX.write(workBook, { bookType: "xlsx", type: "array" });
    const fileData = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(fileData, fileName + fileExtension);
};