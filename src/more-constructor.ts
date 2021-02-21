export {};

// constructorによる初期化処理を簡略化する方法
class Person {
  // public name: string;
  // public age: number;

  constructor(public name: string, protected age: number){ // ポイント(publicは省略しないで記載必要)
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('Raido', 29);
console.log(me);