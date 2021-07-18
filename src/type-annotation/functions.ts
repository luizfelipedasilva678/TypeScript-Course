type MapStringCallback = (item: string) => string;

function mapString(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

const abcMapped = mapString(abc, function (item) {
  return item.toUpperCase();
});

console.log(abcMapped);
