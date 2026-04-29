// Base de Dados de Produtos (Extraída da Planilha)
const PRODUCT_DATABASE = [
  {
    "code": "774",
    "name": "ANTARCTICA BOA",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "3",
    "name": "BRAHMA",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "773",
    "name": "BUDWEISER",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "775",
    "name": "COLORADO APPIA WEISS",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "772",
    "name": "ORIGINAL",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "770",
    "name": "SPATEN",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "771",
    "name": "STELLA ARTOIS",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "24",
    "name": "BRAHMA ZERO (SEM ALCOOL)",
    "category": "CERVEJAS 600 ML"
  },
  {
    "code": "768",
    "name": "CORONA CERO",
    "category": "CERVEJAS LONG NECK"
  },
  {
    "code": "463",
    "name": "CORONA LONG NECK",
    "category": "CERVEJAS LONG NECK"
  },
  {
    "code": "1802",
    "name": "STELLA PURE GOLD",
    "category": "CERVEJAS LONG NECK"
  },
  {
    "code": "776",
    "name": "CARACU LONG NECK",
    "category": "CERVEJAS LONG NECK"
  },
  {
    "code": "53",
    "name": "HEINEKEN LONG NECK",
    "category": "CERVEJAS LONG NECK"
  },
  {
    "code": "373",
    "name": "ICE LIMÃO/SABORES",
    "category": "ICE"
  },
  {
    "code": "5144",
    "name": "CHOPP ANTARCTICA",
    "category": "CHOPP"
  },
  {
    "code": "5215",
    "name": "CHOPP BRAHMA",
    "category": "CHOPP"
  },
  {
    "code": "5216",
    "name": "CHOPP BRAHMA BLACK",
    "category": "CHOPP"
  },
  {
    "code": "8025",
    "name": "ÁGUA CACHOEIRINHA",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "61",
    "name": "ÁGUA COM GÁS",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "65",
    "name": "ÁGUA DE COCO",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "60000",
    "name": "ÁGUA MINIERAL 1,5L",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "60",
    "name": "ÁGUA SEM GAS",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "62",
    "name": "ÁGUA TONICA",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "59",
    "name": "ÁGUA TONICA ZERO",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "27",
    "name": "DEL VALLE DE UVA",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "856",
    "name": "GUARANÁ",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "90551",
    "name": "GUARANA LITRO",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "857",
    "name": "GUARANÁ ZERO",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "858",
    "name": "LIMONETO",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "848",
    "name": "PEPSI",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "849",
    "name": "PEPSI ZERO",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "362",
    "name": "RED BULL",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "860",
    "name": "RED BULL ZERO",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "500057",
    "name": "SCHWEPPES (DRINK) - LATA 310 ML",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "855",
    "name": "SUKITA / FANTA - LARANJA",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "500040",
    "name": "TNT ENERGETICO (DRINK) - LATA 473 ML",
    "category": "SEM ALCÓOL"
  },
  {
    "code": "5168",
    "name": "AMARULA LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5212",
    "name": "APEROL LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "6041",
    "name": "BACARDI BRANCO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "550036",
    "name": "BACARDI ORO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "321",
    "name": "BLACK LABEL",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "645",
    "name": "BLUE LABEL",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "550038",
    "name": "BUCHANAS",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "4009",
    "name": "CABARE EXTRA PREMIUM LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "4010",
    "name": "CABARE FIRE CANELA GARRAFA",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "100001",
    "name": "CABARÉ OURO LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5173",
    "name": "CACHACA 51",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "500064",
    "name": "CACHAÇA DOM TAPPARO LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "344",
    "name": "CAMPARI",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "500062",
    "name": "CARPANO ROSSO LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "1003",
    "name": "COCONUT LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5169",
    "name": "CURAÇAU BLUE LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5174",
    "name": "CURAÇAU FINO LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "550040",
    "name": "GIN BEEFEATER LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5161",
    "name": "GIN NACIONAL",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "529",
    "name": "GIN TANQUERAY",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "1270",
    "name": "GIN GORDON'S PINK",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "1269",
    "name": "GIN GORDON'S LEMON",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "331",
    "name": "GOLD LABEL",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "327",
    "name": "JACK  DANIELS",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "500068",
    "name": "LICOR 43 LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "1005",
    "name": "LICOR DE CASSIS",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "500060",
    "name": "LICOR DE CHOCOLATE 1888",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5165",
    "name": "MARTINI BIANCO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "320",
    "name": "OLD PARR",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "322",
    "name": "RED LABEL",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "648",
    "name": "RESERVA 51",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "528",
    "name": "RESERVA 51 SINGULAR",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "646",
    "name": "ROYAL SALUTE",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5176",
    "name": "SAQUE LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5156",
    "name": "SELETA",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5160",
    "name": "STEINHAEGER NACIONAL",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "348",
    "name": "TEQUILA JOSE CUERVO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5175",
    "name": "TEQUILA PRATA",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "324",
    "name": "VODKA ABSOLUT GF",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "258",
    "name": "VODKA ORLOFF GF",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "266",
    "name": "VODKA SMIRNOFF GF",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5528",
    "name": "XAROPE  MAÇA VERDE LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "5526",
    "name": "XAROPE CRANBERRY LITRO",
    "category": "DESTILADOS EM GERAL"
  },
  {
    "code": "328",
    "name": "1913 BRUT",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "364",
    "name": "1913 BRUT ROSE",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "906",
    "name": "1913 MOSCATEL",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "387",
    "name": "4 ESTACIONES AUTUMM",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "391",
    "name": "4 ESTACIONES SPRING",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "388",
    "name": "4 ESTACIONES WINTER",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "989",
    "name": "ALMA JOVEN",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1072",
    "name": "ANCIANO CLASSICO",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1073",
    "name": "ANNIVERSARIO 62",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "984",
    "name": "CASAS DEL MAIPO CAB SAUVIGNON",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "983",
    "name": "CASAS DEL MAIPO CARMENERE",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "979",
    "name": "CASAS DEL MAIPO CHARDONNAY",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "390",
    "name": "CASAS DEL MAIPO RESERVA PINOT NOIR",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "392",
    "name": "CASAS DEL MAIPO ROSE",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "986",
    "name": "CASTILLO DE MONTEARAGON",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1071",
    "name": "CAVE DE LADAC ROUGE",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "790",
    "name": "KAUZO",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "385",
    "name": "LA VID TINTO",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "384",
    "name": "LA VID VERDE",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "995",
    "name": "LE PETIT MAYNNE BORDEAUX",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "993",
    "name": "MALACARA MALBEC",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1074",
    "name": "MILUNA ROSSO",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1067",
    "name": "MUMM BRUT",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1068",
    "name": "PORTA NOVA VINHO VERDE",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1069",
    "name": "S DE SIEGEL CHARDONNAY",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "1070",
    "name": "S DE SIEGEL ROSE",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "5211",
    "name": "SAN GERMAN (660ml)",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "990",
    "name": "SOL FA SOUL MALBEC",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "7085",
    "name": "VINHO GARRAFÃO BAG",
    "category": "VINHOS / ESPUMANTES"
  },
  {
    "code": "5088",
    "name": "POLPA DE ABACAXI",
    "category": "POLPAS DE FRUTA"
  },
  {
    "code": "5091",
    "name": "POLPA DE ACEROLA",
    "category": "POLPAS DE FRUTA"
  },
  {
    "code": "5092",
    "name": "POLPA DE CAJU",
    "category": "POLPAS DE FRUTA"
  },
  {
    "code": "5093",
    "name": "POLPA DE COCO",
    "category": "POLPAS DE FRUTA"
  },
  {
    "code": "5098",
    "name": "POLPA DE MARACUJA",
    "category": "POLPAS DE FRUTA"
  },
  {
    "code": "5060",
    "name": "LIMÃO",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "5055",
    "name": "LARANJA",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "7058",
    "name": "ABACAXI",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "74",
    "name": "MAMAO FRUTA",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "5531",
    "name": "LIMAO SICILIANO",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "5053",
    "name": "KIWI FRUTA",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "5064",
    "name": "MARACUJA FRUTA",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "5072",
    "name": "MORANGO CONGELADO",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "50772",
    "name": "MORANGO",
    "category": "FRUTAS - POR KG"
  },
  {
    "code": "4994",
    "name": "PICOLE DE COCO SORRISO",
    "category": "PICOLE"
  },
  {
    "code": "4995",
    "name": "PICOLE DE LIMÃO SORRISO",
    "category": "PICOLE"
  },
  {
    "code": "16788",
    "name": "BRIGADEIRO",
    "category": "PICOLE KIBON"
  },
  {
    "code": "16787",
    "name": "CHICABON",
    "category": "PICOLE KIBON"
  },
  {
    "code": "167811",
    "name": "CORNETTO",
    "category": "PICOLE KIBON"
  },
  {
    "code": "448",
    "name": "FRUTTARE",
    "category": "PICOLE KIBON"
  },
  {
    "code": "16784",
    "name": "MAGNUM",
    "category": "PICOLE KIBON"
  },
  {
    "code": "167819",
    "name": "MINI ESKIBOM",
    "category": "PICOLE KIBON"
  },
  {
    "code": "16789",
    "name": "TABLITO",
    "category": "PICOLE KIBON"
  },
  {
    "code": "424",
    "name": "CHOCOLATE",
    "category": "BOMBONIERE"
  },
  {
    "code": "411",
    "name": "HALLS",
    "category": "BOMBONIERE"
  },
  {
    "code": "410",
    "name": "TRIDENT",
    "category": "BOMBONIERE"
  }
];

// Gerenciamento de Estado
let items = JSON.parse(localStorage.getItem('inventory_items')) || [];

// Elementos DOM
const codeInput = document.getElementById('item-code');
const nameInput = document.getElementById('item-name');
const qtyInput = document.getElementById('item-qty');
const addItemBtn = document.getElementById('add-item');
const itemsList = document.getElementById('items-list');
const totalItemsSpan = document.getElementById('total-items');
const clearListBtn = document.getElementById('clear-list');
const exportCsvBtn = document.getElementById('export-csv');
const exportExcelBtn = document.getElementById('export-excel');
const sendWhatsappBtn = document.getElementById('send-whatsapp');
const qtyPlusBtn = document.getElementById('qty-plus');
const qtyMinusBtn = document.getElementById('qty-minus');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderItems();
    updateOnlineStatus();
    
    // Fechar sugestões ao clicar fora
    document.addEventListener('click', (e) => {
        if (!nameInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            closeSuggestions();
        }
    });
});

const suggestionsContainer = document.getElementById('suggestions-container');

function showSuggestions(query) {
    if (!query) {
        closeSuggestions();
        return;
    }

    const filtered = PRODUCT_DATABASE.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.code.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10); // Limitar a 10 sugestões para performance

    if (filtered.length === 0) {
        closeSuggestions();
        return;
    }

    suggestionsContainer.innerHTML = filtered.map(p => `
        <div class="suggestion-item" onclick="selectProduct('${p.name}', '${p.code}')">
            <div class="suggestion-info">
                <span class="suggestion-name">${p.name}</span>
                <span class="suggestion-code">Cód: ${p.code}</span>
            </div>
            <i data-lucide="arrow-up-left" class="suggestion-icon"></i>
        </div>
    `).join('');
    
    suggestionsContainer.classList.add('active');
    lucide.createIcons();
}

function closeSuggestions() {
    suggestionsContainer.classList.remove('active');
}

window.selectProduct = function(name, code) {
    nameInput.value = name;
    codeInput.value = code;
    closeSuggestions();
    qtyInput.focus();
};

// Event Listeners
addItemBtn.addEventListener('click', addItem);
clearListBtn.addEventListener('click', clearItems);
exportCsvBtn.addEventListener('click', exportToCSV);
exportExcelBtn.addEventListener('click', exportToExcel);
sendWhatsappBtn.addEventListener('click', sendToWhatsApp);

qtyPlusBtn.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
});

qtyMinusBtn.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
});

// Detectar Mudança no Nome para Mostrar Sugestões
nameInput.addEventListener('input', (e) => {
    showSuggestions(e.target.value.trim());
});

// Detectar Foco para Mostrar Sugestões se houver texto
nameInput.addEventListener('focus', (e) => {
    showSuggestions(e.target.value.trim());
});

// Detectar Enter no campo de Nome
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (nameInput.value.trim() !== '') {
            codeInput.focus();
        }
    }
});

// Detectar Mudança no Código
codeInput.addEventListener('input', () => {
    const code = codeInput.value.trim();
    const product = PRODUCT_DATABASE.find(p => p.code === code);
    if (product) {
        nameInput.value = product.name;
    }
});

// Detectar Enter no campo de código
codeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        qtyInput.focus();
    }
});

qtyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});

// Funções Principais
function addItem() {
    const code = codeInput.value.trim() || 'S/ COD';
    const name = nameInput.value.trim();
    const qty = parseInt(qtyInput.value);

    if (!name) {
        alert('Por favor, insira o nome do produto.');
        nameInput.focus();
        return;
    }

    const newItem = {
        id: Date.now(),
        code: code,
        name: name || 'Produto s/ nome',
        qty: qty,
        locked: true, // Começa travado para segurança
        timestamp: new Date().toLocaleString()
    };

    items.unshift(newItem);
    saveAndRender();
    
    // Limpar formulário
    codeInput.value = '';
    nameInput.value = '';
    qtyInput.value = 1;
    codeInput.focus();
}

function deleteItem(id) {
    if (confirm('Deseja excluir este item da contagem?')) {
        items = items.filter(item => item.id !== id);
        saveAndRender();
    }
}

function clearItems() {
    if (items.length === 0) return;
    if (confirm('Tem certeza que deseja apagar toda a contagem atual?')) {
        items = [];
        saveAndRender();
    }
}

function saveAndRender() {
    localStorage.setItem('inventory_items', JSON.stringify(items));
    renderItems();
}

function renderItems() {
    totalItemsSpan.textContent = items.length;

    if (items.length === 0) {
        itemsList.innerHTML = `
            <div class="empty-state">
                <i data-lucide="clipboard-list"></i>
                <p>Nenhum item lançado ainda.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    itemsList.innerHTML = items.map(item => `
        <div class="item-card ${item.locked ? 'locked' : 'editing'}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>Cód: ${item.code} • ${item.timestamp}</p>
            </div>
            <div class="item-actions">
                ${item.locked ? `
                    <div class="qty-status">
                        <span class="item-qty-display">${item.qty}</span>
                        <i data-lucide="check-circle-2" class="icon-success"></i>
                    </div>
                    <button class="btn-icon" onclick="toggleLock(${item.id})">
                        <i data-lucide="edit-3"></i>
                    </button>
                ` : `
                    <div class="qty-adjuster">
                        <button onclick="changeQty(${item.id}, -1)"><i data-lucide="minus"></i></button>
                        <span class="item-qty-display">${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)"><i data-lucide="plus"></i></button>
                    </div>
                    <button class="btn-icon btn-confirm" onclick="toggleLock(${item.id})">
                        <i data-lucide="check"></i>
                    </button>
                `}
                <button class="btn-delete" onclick="deleteItem(${item.id})">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function toggleLock(id) {
    const item = items.find(i => i.id === id);
    if (item) {
        item.locked = !item.locked;
        saveAndRender();
    }
}

function changeQty(id, delta) {
    const item = items.find(i => i.id === id);
    if (item) {
        item.qty = Math.max(1, item.qty + delta);
        saveAndRender();
    }
}

// Exportação
function exportToCSV() {
    if (items.length === 0) return alert('Não há itens para exportar.');

    const headers = ['Código', 'Nome', 'Quantidade', 'Data/Hora'];
    const rows = items.map(item => [
        `"${item.code}"`,
        `"${item.name}"`,
        item.qty,
        `"${item.timestamp}"`
    ]);

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += headers.join(",") + "\n";
    csvContent += rows.map(r => r.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `contagem_estoque_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToExcel() {
    if (items.length === 0) return alert('Não há itens para exportar.');

    const data = items.map(item => ({
        'Código/SKU': item.code,
        'Produto': item.name,
        'Quantidade': item.qty,
        'Data da Contagem': item.timestamp
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contagem");

    XLSX.writeFile(workbook, `contagem_estoque_${new Date().toISOString().split('T')[0]}.xlsx`);
}

function sendToWhatsApp() {
    if (items.length === 0) return alert('Não há itens para enviar.');

    let message = `📦 *CONTAGEM DE ESTOQUE*\n`;
    message += `📅 Data: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}\n`;
    message += `----------------------------\n\n`;

    items.forEach((item, index) => {
        message += `*${index + 1}. ${item.name}*\n`;
        message += `   Cód: ${item.code}\n`;
        message += `   Qtd: *${item.qty}* unid\n\n`;
    });

    message += `----------------------------\n`;
    message += `*Total de Itens:* ${items.length}\n`;
    message += `_Gerado por Rede Bombar_`;

    const phone = "5534991147905";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Status Online/Offline
function updateOnlineStatus() {
    const statusDiv = document.getElementById('offline-status');
    const statusText = statusDiv.querySelector('.status-text');
    const dot = statusDiv.querySelector('.dot');

    if (navigator.onLine) {
        statusDiv.style.background = 'rgba(16, 185, 129, 0.1)';
        statusText.textContent = 'Modo Online';
        statusText.style.color = '#10b981';
        dot.style.background = '#10b981';
    } else {
        statusDiv.style.background = 'rgba(245, 158, 11, 0.1)';
        statusText.textContent = 'Modo Offline';
        statusText.style.color = '#f59e0b';
        dot.style.background = '#f59e0b';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
