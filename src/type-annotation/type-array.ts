// Array<T> - T[]

function multiplicaArgs(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(toUpper('a', 'b'));
console.log(concatenaString('sdfsdf', 'werwerer'));
console.log(multiplicaArgs(13, 45, 10));
