@decorator
export class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args);

      this.cor = args[0] + 'asdasd';
    }
  };
}

const animal = new Animal('roxo');
console.log(animal);
