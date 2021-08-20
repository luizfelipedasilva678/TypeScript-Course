// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNamespace {
  const nome = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new MeuNamespace.PessoaDoNamespace('Luiz');
  console.log(pessoa);
}

/*
function request() {
  fs.readFile(
    `${path.resolve(__dirname, '..', '..')}/_data.json`,
    (err: any, data: any) => {
      if (err) throw err;
      console.log(JSON.parse(data));
    },
  );
}
*/
