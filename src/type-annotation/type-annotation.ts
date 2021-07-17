/* eslint-disable */

let nome : string = 'Luiz';
let idade: number = 30;
let adulto: boolean = false;
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint : 10n;

// Arrays

let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['1','2','3'];

// Objetos

let pessoa: {nome: string, idade:number, adulto?: boolean} = {
  nome: 'Luiz',
  idade: 30
};

console.log(pessoa.nome);

//Funções

function soma(x:number, y:number): number{
  return x + y;
}

const soma2: (x:number, y:number) => number = (x, y) => x + y;


