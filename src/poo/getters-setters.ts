export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private _idade: number,
    private cpf: string,
  ) {}

  get idade(): number {
    return this._idade;
  }

  set idade(idade: number) {
    this._idade = idade;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000000000-00');

pessoa.idade = 10;
console.log(pessoa);
