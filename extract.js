const XLSX = require('xlsx');
const workbook = XLSX.readFile('CONTAGEM RECANTO - 2025 - estoque.xlsx');
let allProducts = [];

workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    // Usar header: 1 para obter arrays brutos, mais seguro para planilhas irregulares
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    
    data.forEach(row => {
        if (!row || row.length < 2) return;
        
        // Tenta encontrar um número de código e um nome de produto
        let code = null;
        let name = null;

        // Geralmente código está na primeira ou segunda coluna
        // Nome está na segunda ou terceira
        row.forEach((cell, idx) => {
            if (typeof cell === 'number' && !code) {
                code = String(cell);
            } else if (typeof cell === 'string' && cell.trim().length > 2 && !name) {
                // Evitar cabeçalhos comuns
                const val = cell.trim().toUpperCase();
                if (!['PRODUTO', 'RESPONSÁVEL', 'DATA', 'PERÍODO', 'TOTAL', 'QUANTIDADE', 'COD', 'RECANTO DA PRAÇA', 'CONTAGEM', 'ESTOQUE'].includes(val)) {
                    name = cell.trim();
                }
            }
        });

        if (code && name) {
            allProducts.push({
                code: code,
                name: name,
                category: sheetName
            });
        }
    });
});

// Remover duplicatas
const uniqueProducts = [];
const seen = new Set();
allProducts.forEach(p => {
    const key = p.code + p.name;
    if (!seen.has(key)) {
        uniqueProducts.push(p);
        seen.add(key);
    }
});

console.log(JSON.stringify(uniqueProducts, null, 2));
