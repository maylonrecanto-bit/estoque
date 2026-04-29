# Estoque Rede Bombar - Contagem Offline (PWA)

Sistema leve e eficiente para contagem de estoque, projetado para funcionar totalmente offline em dispositivos móveis. Ideal para inventários em locais sem conectividade estável.

## 🚀 Funcionalidades

- **Operação Offline**: Funciona sem internet após o primeiro carregamento (PWA).
- **Busca Rápida**: Digite o nome ou código do produto para localizar rapidamente na base de dados.
- **Segurança de Dados**: Trava automática de quantidade para evitar edições acidentais durante a contagem.
- **Exportação Flexível**: Gere arquivos em formato CSV ou Excel (.xlsx) diretamente do navegador.
- **Armazenamento Local**: Os dados ficam salvos no navegador e não são perdidos ao fechar a aba.

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3**: Interface moderna e responsiva.
- **JavaScript (Vanilla)**: Lógica principal sem dependências pesadas.
- **SheetJS**: Para geração de planilhas Excel.
- **Lucide Icons**: Ícones modernos e leves.
- **Service Workers**: Para suporte offline e instalação como aplicativo.

## 📦 Como Instalar (GitHub Pages)

1. Faça o fork ou download deste repositório.
2. Vá em **Settings > Pages** no seu repositório GitHub.
3. Configure o "Source" para a branch `main`.
4. O link do seu app será gerado automaticamente.

## 📝 Como Personalizar a Base de Produtos

A base de produtos está localizada no início do arquivo `app.js` dentro da constante `PRODUCT_DATABASE`. Você pode substituir os itens de exemplo pelos seus próprios produtos seguindo o formato:

```javascript
{ "code": "CÓDIGO", "name": "NOME DO PRODUTO", "category": "CATEGORIA" }
```

---
*Desenvolvido para facilitar a gestão de inventário.*
