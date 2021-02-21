export {};

class Animal {
  constructor(public name: string){
    this.name = name;
  }

  run(): string{
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(public name: string, speed: number){
    super(name);
    this.speed = speed;
  }

  run(): string{
    return `${super.run()} ${this.speed}km/h` 
  }
}
let animal = new Animal('Mickey');
console.log(animal.run());

let lion = new Lion('', 80);
console.log(lion.run());
