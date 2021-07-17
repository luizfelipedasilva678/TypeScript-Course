let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstname: string,
  lastname?: string,
): {
  firstname: string;
  lastname?: string;
} {
  return {
    firstname,
    lastname,
  };
}

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
