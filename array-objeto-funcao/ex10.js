const jogadores = [
  { nome: 'Ana', pontos: 120 },
  { nome: 'Bruno', pontos: 95 },
  { nome: 'Carla', pontos: 150 },
  { nome: 'Diego', pontos: 110 }
];

// Ordena e retorna um novo array dos maiores para o menores pontos
function ordenarPorPontosDesc(listaJogadores) {
  // cria uma cópia para não mutar o array original
  const copia = listaJogadores.slice();
  // ordena usando função de comparação (b - a para ordem decrescente)
  copia.sort((a, b) => b.pontos - a.pontos);
  return copia;
}

// Cria uma constante com a função já realizada no array//
const ranking = ordenarPorPontosDesc(jogadores);
console.log('Ranking do maior para o menor:');
//Percorre o ranking e imprime em ordem decrescente do primeiro ao ultímo lugar.//
ranking.forEach((jogadores, index) => {
  console.log(`${index + 1}. ${jogadores.nome} — ${jogadores.pontos} pontos.`);
});