function semRetorno(nome: string, ...args: number[]): void {
  console.log(nome, args);
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();
semRetorno('Luiz', 1, 2, 3);

export { pessoa };
