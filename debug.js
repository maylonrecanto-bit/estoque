const XLSX = require('xlsx');
const workbook = XLSX.readFile('CONTAGEM RECANTO - 2025 - estoque.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);
console.log(Object.keys(data[5] || {}));
console.log(data[5]);
