const XLSX = require('xlsx');
const fs = require('fs');
const workbook = XLSX.readFile('CADASTRO.xlsx');
let allProducts = [];

workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    
    const startRow = (data[0] && data[0][0] === 'CATEGORIA') ? 1 : 0;

    for (let i = startRow; i < data.length; i++) {
        const row = data[i];
        const category = row[0];
        const code = row[1];
        const name = row[2];
        
        if (name && code) {
            allProducts.push({
                code: String(code).trim(),
                name: String(name).trim(),
                category: String(category || '').trim()
            });
        }
    }
});

fs.writeFileSync('products_extracted.json', JSON.stringify(allProducts, null, 2), 'utf8');
console.log('Extração concluída: ' + allProducts.length + ' produtos encontrados.');
