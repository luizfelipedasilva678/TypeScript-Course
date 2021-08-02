// Declaration merging
interface Pessoa90 {
  nome: string;
}

interface Pessoa90 {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa90: Pessoa90 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

pessoa90.idade = 31;
console.log(pessoa90);
