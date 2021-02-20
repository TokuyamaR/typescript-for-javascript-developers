export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Raido';
  static lastName: string = 'Toku';

  static work(){
    return `My name is ${this.firstName}`;
  }
}

// let me = new Me();
console.log(Me.work()); // functionもinstanceを生成せずに呼び出せる