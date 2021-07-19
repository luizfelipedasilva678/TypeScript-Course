export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly nome: string) {
    this.nome = nome;
  }
}

const empresa1 = new Empresa('Extra', '123414234324');
const colaborador1 = new Colaborador('José');
const colaborador2 = new Colaborador('José');
const colaborador3 = new Colaborador('José');
const colaborador4 = new Colaborador('José');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador(colaborador4);

console.log(empresa1);
console.log(empresa1.mostrarColaboradores());
