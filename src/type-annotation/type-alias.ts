type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CMYK = 'Ciano' | 'Magenta' | 'Amarela' | 'Preta';

const pessoa: Pessoa = {
  nome: 'Teste',
  idade: 30,
  salario: 15000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorRGB) {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Vermelho'));
