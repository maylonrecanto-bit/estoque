const XLSX = require('xlsx');
const workbook = XLSX.readFile('CONTAGEM RECANTO - 2025 - estoque.xlsx');
let allProducts = [];

workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    
    data.forEach(row => {
        // Nas suas planilhas, o código está na coluna 0 e o produto na coluna 1
        const code = row[0];
        const name = row[1];
        
        if (typeof code === 'number' && typeof name === 'string' && name.trim().length > 1) {
            allProducts.push({
                code: String(code),
                name: name.trim(),
                category: sheetName
            });
        }
    });
});

console.log(JSON.stringify(allProducts, null, 2));
