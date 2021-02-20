export {};
class Person{
  name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string{
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string{
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Android('Raido',29, 'Japan');
console.log(taro.profile());
// console.log(taro.age);