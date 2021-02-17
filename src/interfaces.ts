export {};

type ObjectType1 = {
  name: string,
  age: number,
  address: string,
}

interface ObjectInterface { // 「=」は不要
  name: string,
  age: number,
  address: string
}
const object: ObjectInterface = {
  name: 'toku',
  age: 29,
  address: 'Tokyo'
}