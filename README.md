
Sistema de Gerenciamento de Funcionários.

Este aplicativo TypeScript modela um Sistema de Gerenciamento de Funcionários
 com classes representando diferentes tipos de funcionários e uma classe para 
 gerenciar a lista de funcionários.

Classes
1. Classe Funcionario
Representa um funcionário genérico com informações básicas.

Propriedades:

nome: (string) Nome do funcionário.
idade: (number) Idade do funcionário.
cargaHoraria: (number) Horas de trabalho semanais.
valorHora: (number) Salário por hora.
Métodos:

constructor(nome: string, idade: number, cargaHoraria: number): Inicializa o funcionário com informações básicas.
gerarRemuneracao(): number: Gera a remuneração do funcionário com base no salário por hora e nas horas trabalhadas.
2. Classe CLT (Filha de Funcionario)
Representa um funcionário sob contrato de trabalho CLT (Consolidação das Leis do Trabalho).

Propriedades Adicionais:

formacao: (string) Formação educacional do funcionário.
cargo: (string) Cargo do funcionário.
salario: (number) Salário mensal.
Métodos Adicionais:

constructor(nome: string, idade: number, cargaHoraria: number, formacao: string, cargo: string, salario: number):
 Inicializa um funcionário CLT com informações estendidas.

gerarRemuneracao(): number: Gera a remuneração do funcionário considerando um desconto de 10% sobre a remuneração base.
3. Classe Estagiario (Filha de Funcionario)
Representa um estagiário.

Propriedades Adicionais:

formacao: (string) Formação educacional do estagiário.
areaAtuacao: (string) Área de atuação do estagiário.
statusFormacao: (string) Status educacional do estagiário (por exemplo, "Cursando").
bolsa: (number) Bolsa mensal.

Métodos Adicionais:

constructor(nome: string, idade: number, cargaHoraria: number, formacao: string, areaAtuacao: 
string, statusFormacao: string, bolsa: number) 

Inicializa um estagiário com informações estendidas.
1. Classe Funcionarios
Gerencia uma lista de funcionários.

Propriedades:

listaFuncionarios: (Funcionario[]) Lista de funcionários.

Métodos:

constructor(): Inicializa uma lista vazia de funcionários.
adicionarFuncionario(funcionario: Funcionario): void: Adiciona um funcionário à lista.
removerFuncionario(nome: string): void: Remove um funcionário da lista pelo nome.
listarFuncionarios(): void: Exibe a lista de funcionários com informações relevantes.

As configurações nescessaria para rodar o projeto com exedo.

Nas configurações TSconfig.json

{
  "compilerOptions": {
    "target": "es2016",                                  
    "module": "commonjs",                                
    "esModuleInterop": true,                            
    "forceConsistentCasingInFileNames": true,            
    "strict": true,                                                   
    "skipLibCheck": true                               
  }
}
 E no package.json

 {
  "name": "src",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
