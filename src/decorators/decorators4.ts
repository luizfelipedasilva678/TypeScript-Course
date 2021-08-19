type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T) {
    return class extends target {
      cor: string;

      constructor(...args: any[]) {
        super(...args);

        this.cor = args[0] + 'asdasd' + param1 + param2;
      }
    };
  };
}

function outroDecorador(targ: Constructor) {
  console.log('Sou o decorador');
}

@outroDecorador
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public cor: string) {}
}

const animal = new Animal('roxo');
console.log(animal);
