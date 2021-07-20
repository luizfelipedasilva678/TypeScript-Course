export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public _idade: number,
    public cpf: string,
  ) {}

  static hello(): void {
    console.log('hello');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000000000-00');
console.log(pessoa);
console.log(Pessoa.hello());
