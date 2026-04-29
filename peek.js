const XLSX = require('xlsx');
const workbook = XLSX.readFile('CADASTRO.xlsx');
workbook.SheetNames.forEach(sheetName => {
    console.log(`--- Sheet: ${sheetName} ---`);
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log(JSON.stringify(data.slice(0, 10), null, 2));
});
