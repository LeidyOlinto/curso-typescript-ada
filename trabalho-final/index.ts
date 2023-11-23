class Disciplina {
  constructor(public nome: string, 
    public cargaHoraria: number,
     public nota: number) {

     }
}

class Curso {
  disciplinas: Disciplina[] = [];

  constructor(public nome: string,
     public turno: string) {}

  cadastrarDisciplina(nome: string, cargaHoraria: number, nota: number): void {
    const disciplina = new Disciplina(nome, cargaHoraria, nota);
    this.disciplinas.push(disciplina);
  }
}

class Aluno {
  constructor(public nome: string,
     public idade: number,
      public curso: Curso) {}

  mostrarDados(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Curso: ${this.curso.nome}`);
    console.log("Disciplinas:");

    this.curso.disciplinas.forEach((disciplina, index) => {
      console.log(`  ${index + 1}. ${disciplina.nome} - Carga Horária: ${disciplina.cargaHoraria}h - Nota: ${disciplina.nota}`);
    });
  }
}

class Sistema {
  mostrarAluno(arg0: number) {
    throw new Error("Method not implemented.");
  }
  alunos: Aluno[] = [];
  cursos: Curso[] = [];

  // Métodos de gerenciamento de ALUNOS
  cadastrarAluno(nome: string, idade: number, curso: Curso): void {
    const aluno = new Aluno(nome, idade, curso);
    this.alunos.push(aluno);
  }

  consultarAluno(index: number): void {
    if (index >= 0 && index < this.alunos.length) {
      this.alunos[index].mostrarDados();
    } else {
      console.log("Aluno não encontrado.");
    }
  }

  removerAluno(index: number): void {
    if (index >= 0 && index < this.alunos.length) {
      this.alunos.splice(index, 1);
      console.log("Aluno removido com sucesso.");
    } else {
      console.log("Aluno não encontrado.");
    }
  }

  // Métodos de gerenciamento de CURSOS
  cadastrarCurso(nome: string, turno: string): void {
    const curso = new Curso(nome, turno);
    this.cursos.push(curso);
  }

  consultarCurso(index: number): void {
    if (index >= 0 && index < this.cursos.length) {
      console.log(`Nome do Curso: ${this.cursos[index].nome}`);
      console.log(`Turno: ${this.cursos[index].turno}`);
      console.log("Disciplinas:");

      this.cursos[index].disciplinas.forEach((disciplina, index) => {
        console.log(`  ${index + 1}. ${disciplina.nome} - Carga Horária: ${disciplina.cargaHoraria}h - Nota: ${disciplina.nota}`);
      });
    } else {
      console.log("Curso não encontrado.");
    }
  }

  // Métodos de gerenciamento de DISCIPLINAS
  cadastrarDisciplina(indexCurso: number, nome: string, cargaHoraria: number, nota: number): void {
    if (indexCurso >= 0 && indexCurso < this.cursos.length) {
      this.cursos[indexCurso].cadastrarDisciplina(nome, cargaHoraria, nota);
    } else {
      console.log("Curso não encontrado.");
    }
  }

  // Métodos do MENU principal
  mostrarMenuPrincipal(): void {
    console.log("MENU");
    console.log("1-Gerenciar ALUNOS");
    console.log("2-Gerenciar DISCIPLINAS");
    console.log("3-Gerenciar CURSOS");
    console.log("4-SAIR");
  }

  executarOpcaoPrincipal(opcao: number): void {
    switch (opcao) {
      case 1:
        this.mostrarMenuAlunos();
        break;
      case 2:
        this.mostrarMenuDisciplinas();
        break;
      case 3:
        this.mostrarOpcaoCursos();
        break;
      case 4:
        console.log("Saindo do sistema.");
        break;
      default:
        console.log("Opção inválida.");
    }
  }
  

  // Métodos do SUBMENU de ALUNOS
  mostrarMenuAlunos(): void {
    console.log("SUBMENU ALUNOS");
    console.log("1-Cadastrar ALUNO");
    console.log("2-Consultar ALUNO");
    console.log("3-Remover ALUNO");
    console.log("4-Atualizar ALUNO");
  }

  executarOpcaoAlunos(opcao: number): void {
    switch (opcao) {
      case 1:
        // Cadastrar Aluno
        console.log("Cadastro de Aluno:");
        // Solicitar informações necessárias
        break;
      case 2:
        // Consultar Aluno
        console.log("Consulta de Aluno:");
        // Solicitar índice do aluno a ser consultado
        break;
      case 3:
        // Remover Aluno
        console.log("Remoção de Aluno:");
        // Solicitar índice do aluno a ser removido
        break;
      case 4:
        // Atualizar Aluno
        console.log("Atualização de Aluno:");
        // Solicitar índice do aluno a ser atualizado e novas informações
        break;
      default:
        console.log("Opção inválida.");
    }
  }

  // Métodos do SUBMENU de DISCIPLINAS
  mostrarMenuDisciplinas(): void {
    console.log("SUBMENU DISCIPLINAS");
    console.log("1-Cadastrar DISCIPLINA");
    console.log("2-Consultar DISCIPLINA");
    console.log("3-Remover DISCIPLINA");
    console.log("4-Atualizar DISCIPLINA");
  }

  executarOpcaoDisciplinas(opcao: number): void {
    switch (opcao) {
      case 1:
        // Cadastrar Disciplina
        console.log("Cadastro de Disciplina:");
        // Solicitar informações necessárias
        break;
      case 2:
        // Consultar Disciplina
        console.log("Consulta de Disciplina:");
        // Solicitar índice da disciplina a ser consultada
        break;
      case 3:
        // Remover Disciplina
        console.log("Remoção de Disciplina:");
        // Solicitar índice da disciplina a ser removida
        break;
      case 4:
        // Atualizar Disciplina
        console.log("Atualização de Disciplina:");
        // Solicitar índice da disciplina a ser atualizada e novas informações
        break;
      default:
        console.log("Opção inválida.");
    }
  }

  // // Métodos do SUBMENU de CURSOS
 mostrarOpcaoCursos(): void {
    console.log("SUBMENU CURSOS");
    console.log("1-Cadastrar CURSO");
    console.log("2-Consultar CURSO");
  }
  executarOpcaoCursos(opcao: number): void {
    switch (opcao) {
      case 1:
        // Cadastrar cursos
        console.log("Cadastro de cursos:");
        // Solicitar informações necessárias
        break;
      case 2:
        // Consultar cursos
        console.log("Consulta de cursos:");
        // Solicitar índice da cursos a ser consultada
        break;
      case 3:
        // Remover cursos
        console.log("Remoção de cursos:");
        // Solicitar índice da cursos a ser removida
        break;
      case 4:
        // Atualizarcursos
        console.log("Atualização de cursos:");
        // Solicitar índice da cursos a ser atualizada e novas informações
        break;
      default:
        console.log("Opção inválida.");
    }
  }}



// Exemplo de uso do sistema
const sistema = new Sistema();

// Adicionando alguns cursos
sistema.cadastrarCurso("Engenharia de Software", "Manhã");
sistema.cadastrarCurso("Ciência da Computação", "Tarde");

// Adicionando alguns alunos
sistema.cadastrarAluno("João", 20, sistema.cursos[0]);
sistema.cadastrarAluno("Maria", 22, sistema.cursos[1]);

// Adicionando algumas disciplinas aos cursos
sistema.cadastrarDisciplina(0, "Programação I", 60, 8.5);
sistema.cadastrarDisciplina(1, "Algoritmos", 50, 9.0);

// Mostrando o menu principal
sistema.mostrarMenuPrincipal();

// Simulando a escolha da opção 3 (Gerenciar CURSOS)
sistema.mostrarMenuAlunos();
sistema.executarOpcaoCursos(2);  // Consultar CURSO
