class Funcionario {
  nome: string;
  idade: number;
  cargaHoraria: number;
  valorHora: number;

  constructor(nome: string, idade: number, cargaHoraria: number) {
    this.nome = nome;
    this.idade = idade;
    this.cargaHoraria = cargaHoraria;
    this.valorHora = 0; // Valor inicial, será atualizado nas classes filhas
  }

  gerarRemuneracao(): number {
    return this.cargaHoraria * this.valorHora;
  }
}

class CLT extends Funcionario {
  formacao: string;
  cargo: string;
  salario: number;

  constructor(nome: string, idade: number, cargaHoraria: number, formacao: string, cargo: string, salario: number) {
    super(nome, idade, cargaHoraria);
    this.formacao = formacao;
    this.cargo = cargo;
    this.salario = salario;
    this.valorHora = salario / 160; // Considerando 160 horas mensais
  }

  gerarRemuneracao(): number {
    const remuneracaoBase = super.gerarRemuneracao();
    const desconto = remuneracaoBase * 0.1; // Exemplo de desconto de 10%
    return remuneracaoBase - desconto;
  }
}

class Estagiario extends Funcionario {
  formacao: string;
  areaAtuacao: string;
  statusFormacao: string;
  bolsa: number;

  constructor(
    nome: string,
    idade: number,
    cargaHoraria: number,
    formacao: string,
    areaAtuacao: string,
    statusFormacao: string,
    bolsa: number
    ) {
    super(nome, idade, cargaHoraria);
    this.formacao = formacao;
    this.areaAtuacao = areaAtuacao;
    this.statusFormacao = statusFormacao;
    this.bolsa = bolsa;
    this.valorHora = bolsa / 160; // Considerando 160 horas mensais
  }
}

class Funcionarios {
  listaFuncionarios: Funcionario[];

  constructor() {
    this.listaFuncionarios = [];
  }

  adicionarFuncionario(funcionario: Funcionario): void {
    this.listaFuncionarios.push(funcionario);
  }

  removerFuncionario(nome: string): void {
    this.listaFuncionarios = this.listaFuncionarios.filter(funcionario => funcionario.nome !== nome);
  }

  listarFuncionarios(): void {
    console.log("\n******Lista de Funcionários:******\n");
    this.listaFuncionarios.forEach(funcionario => {
      console.log(`Nome: ${funcionario.nome}, idade ${funcionario.idade} Cargo: ${funcionario instanceof CLT ? (funcionario as CLT).cargo : (funcionario as Estagiario).areaAtuacao}`);
    });
  }
}

// Exemplo de uso:
const funcionarios = new Funcionarios();

const clt1 = new CLT("João", 25, 160, "Superior", "Desenvolvedor", 5000);
const estagiario1 = new Estagiario("Maria", 22, 20, "Graduando", "Back-End", "Cursando", 1000);
const estagiario2 = new Estagiario("Elen", 28, 208, "Graduando", "TI", "Cursando", 1000);

funcionarios.adicionarFuncionario(clt1);
funcionarios.adicionarFuncionario(estagiario1);
funcionarios.adicionarFuncionario(estagiario2);
funcionarios.listarFuncionarios();

console.log("\nGerar Remuneração para Pedro Andrade (CLT):", clt1.gerarRemuneracao());
console.log("Gerar Remuneração para Elen Santos(Estagiário):", estagiario2.gerarRemuneracao());

funcionarios.removerFuncionario("João");
funcionarios.listarFuncionarios();

