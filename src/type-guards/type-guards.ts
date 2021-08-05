function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
}

console.log(add(1, 5));

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
  if ('nome' in obj) console.log(obj.nome);
}

mostraNome(new Aluno('joão'));
