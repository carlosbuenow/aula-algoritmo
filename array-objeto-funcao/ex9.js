const input = require('readline-sync');

// Contas cadastradas no sistema
const contasCadastro = [
  {
    agencia: '0001',
    numeroDaConta: '123456',
    senha: '2645',
    saldo: 1550.75,
    historico: ['Depósito inicial R$ 1550,75']
  },
  {
    agencia: '0001',
    numeroDaConta: '987654',
    senha: '5481',
    saldo: 2000.65,
    historico: ['Depósito inicial R$ 2000,65']
  }
];

// Variável que armazenará a conta autenticada
let contaLogada = null;

// Notas disponíveis no caixa
const notasDisponiveis = [100, 50, 20, 10];

/*
  Classe Conta
  Representa uma conta bancária com métodos para manipular saldo e histórico
*/
class Conta {
  constructor({ agencia, numeroDaConta, senha, saldo, historico }) {
    this.agencia = agencia;
    this.numeroDaConta = numeroDaConta;
    this.senha = senha;
    this.saldo = saldo;
    this.historico = Array.isArray(historico) ? historico.slice() : [];
  }

  // Retorna o saldo atual
  exibirSaldo() {
    console.log('---------------------------------------------');
    console.log('                SALDO DA CONTA               ');
    console.log('---------------------------------------------');
    console.log(`Conta: ${this.numeroDaConta}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    return this.saldo;
  }

  // Adiciona uma entrada ao histórico
  adicionarHistorico(texto) {
    this.historico.push(texto);
  }

  // Realiza saque se houver saldo e se o valor for múltiplo de 10
  // Atualiza saldo e histórico e retorna objeto com detalhes das notas entregues
  sacar(valor) {
    if (typeof valor !== 'number' || isNaN(valor) || valor <= 0) {
      console.log('X ERRO: Valor inválido. Informe um número positivo.');
      return null;
    }

    if (valor % 10 !== 0) {
      console.log('X ERRO: O caixa só entrega cédulas de 100, 50, 20 e 10. Informe um valor múltiplo de 10.');
      return null;
    }

    if (valor > this.saldo) {
      console.log(`X ERRO: Saldo insuficiente. Seu saldo atual é R$ ${this.saldo.toFixed(2)}`);
      return null;
    }

    // Cálculo das cédulas (algoritmo guloso)
    let restante = valor;
    const entregues = {};

    for (const nota of notasDisponiveis) {
      const qtd = Math.floor(restante / nota);
      if (qtd > 0) {
        entregues[nota] = qtd;
        restante -= qtd * nota;
      }
      if (restante === 0) break;
    }

    if (restante !== 0) {
      console.log('Não foi possível compor o valor solicitado com as cédulas disponíveis.');
      return null;
    }

    // Atualiza saldo e histórico
    this.saldo -= valor;
    this.adicionarHistorico(`Saque R$ ${valor.toFixed(2)}`);

    // Exibe informações do saque
    console.log('-----------Realizar Saque-----------');
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    console.log('--------- Distribuição de Cédulas ----------');
    for (const nota of notasDisponiveis) {
      if (entregues[nota]) {
        console.log(`R$ ${nota}: ${entregues[nota]} cédula(s)`);
      }
    }
    console.log(`Saldo restante: R$ ${this.saldo.toFixed(2)}`);

    return { valor, notas: entregues };
  }

  // Mostra o histórico completo da conta
  mostrarHistorico() {
    console.log('Histórico de Operações:');
    if (this.historico.length === 0) {
      console.log('Nenhuma operação registrada.');
      return;
    }
    for (let i = 0; i < this.historico.length; i++) {
      console.log(`${i + 1}. ${this.historico[i]}`);
    }
  }
}

/*
  Função que valida acesso
  Recebe agência, número da conta e senha; retorna uma instância de Conta quando válido ou false quando inválido
*/
function validarAcesso(agencia, numero, senha) {
  for (let i = 0; i < contasCadastro.length; i++) {
    const c = contasCadastro[i];
    if (c.agencia === agencia && c.numeroDaConta === numero && c.senha === senha) {
      console.log('Acesso liberado! Seja bem-vindo.');
      return new Conta(c);
    }
  }
  console.log('Acesso negado: Agência, Conta ou Senha estão incorretos.');
  return false;
}

/*
  Função que exibe o menu principal
  Recebe a instância da conta autenticada e permite realizar operações até o usuário sair
*/
function menuPrincipal(conta) {
  let opcao = '';
  while (opcao !== '3') {
    console.log('----------------Menu----------------------');
    console.log('1. Realizar Saque');
    console.log('2. Mostrar Saldo e Histórico');
    console.log('3. Sair');
    console.log('------------------------------------------');

    opcao = input.question('Escolha uma opção: ');

    switch (opcao) {
      case '1': {
        console.log('-----------Realizar Saque-----------');
        conta.exibirSaldo();
        const valorSaque = parseFloat(input.question('Digite um valor para saque (múltiplo de 10): '));
        conta.sacar(valorSaque);
        break;
      }

      case '2':
        conta.exibirSaldo();
        conta.mostrarHistorico();
        break;

      case '3':
        console.log('Sessão encerrada');
        break;

      default:
        console.log('Opção inválida. Tente novamente.');
    }
  }
}

/*
  Função que inicia o sistema
  Solicita dados de acesso e, se válidos, abre o menu principal
*/
function iniciarSistema() {
  console.log('---------------------------------------------');
  console.log('        SISTEMA DE ACESSO BANCÁRIO           ');
  console.log('---------------------------------------------');

  const infoAg = input.question('Digite sua Agência: ');
  const infoCnt = input.question('Digite sua Conta: ');
  const infoSenha = input.question('Digite sua Senha: ', { hideEchoBack: true });

  const conta = validarAcesso(infoAg, infoCnt, infoSenha);
  if (conta) {
    contaLogada = conta;
    menuPrincipal(contaLogada);
  }
}

// Inicia o programa
iniciarSistema();