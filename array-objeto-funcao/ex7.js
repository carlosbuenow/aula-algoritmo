const produtos = [
  { nome: 'Arroz', preco: 23.9, quantidade: 2 },
  { nome: 'Feijão', preco: 8.5, quantidade: 1 },
  { nome: 'Azeite', preco: 19.75, quantidade: 3 },
  { nome: 'Café', preco: 15.2, quantidade: 2 },
  { nome: 'Macarrão', preco: 6.9, quantidade: 0 }
];

// Filtra os produtos que o usuário escolheu e que têm quantidade maior que zero
function selecionarProdutos(produtos, nomesSelecionados) {
  return produtos
    .filter((p) => nomesSelecionados.includes(p.nome))
    .filter((p) => p.quantidade > 0);
}

// Calcula o subtotal de um item (quantidade vezes preço)
function calcularSubtotalItem(item) {
  return item.quantidade * item.preco;
}

// Soma todos os subtotais para obter o total do carrinho
function calcularTotalCarrinho(carrinho) {
  return carrinho.reduce((total, item) => total + calcularSubtotalItem(item), 0);
}

// Formata um número para moeda BRL
function formatarBRL(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

// Imprime no console os produtos do carrinho e o total a pagar
function imprimirResumoCarrinho(carrinho) {
  if (carrinho.length === 0) {
    console.log('Carrinho vazio.');
    return;
  }

  console.log('=== Produtos selecionados ===');
  carrinho.forEach((item) => {
    const subtotal = calcularSubtotalItem(item);
    console.log(
      `- ${item.nome} | Qtde: ${item.quantidade} | Preço unit.: ${formatarBRL(item.preco)} | Subtotal: ${formatarBRL(subtotal)}`
    );
  });

  const total = calcularTotalCarrinho(carrinho);
  console.log('=== Total a pagar ===');
  console.log(formatarBRL(total));
}

// Exemplo de seleção pelo usuário
const nomesSelecionados = ['Arroz', 'Azeite', 'Café'];

// Monta o carrinho e imprime o resumo
const carrinho = selecionarProdutos(produtos, nomesSelecionados);
imprimirResumoCarrinho(carrinho);