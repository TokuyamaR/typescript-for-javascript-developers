export {};
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Raido', 29);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>; // classのconstructorの引数を取得

const profile: Profile = ['Miho', 28];
const miho = new Person(...profile);
console.log(miho)