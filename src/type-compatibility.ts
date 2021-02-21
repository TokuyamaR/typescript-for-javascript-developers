export {};

interface Animal {
  name: string;
  age: number;
}

class Person {
  constructor(public name: string, public age: number){}
}

let me: Animal;
me = new Person('Raido', 29); // Animal型と同じメンバーがあり、かつメンバーの型一致していなければエラー
