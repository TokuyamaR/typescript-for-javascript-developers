export {};

let person: {name: string, age: (number | null)} = { // union型を使用することでnullableな型を実現できる
  name: 'Raido',
  age: null
};

console.log(person.age); // errorにならない
console.log(person.name);