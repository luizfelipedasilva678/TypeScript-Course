const objetoA: {
  readonly chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'VAlor B',
};

console.log(objetoA);
