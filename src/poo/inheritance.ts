export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Meu nome é ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {}

const aluno = new Aluno('teste', 'teste', 13, '123123123123');

test(aluno);

function test(obj: Pessoa) {
  console.log('Olá ' + obj.getNomeCompleto());
}
