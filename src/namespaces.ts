export {};

namespace Japanese {

  export namespace Tokyo {
    export class Person { // exportを記載することで、空間外からアクセスできる
      constructor(public name: string){}
    }
  }

  export namespace Osaka {
    export class Person { // exportを記載することで、空間外からアクセスできる
      constructor(public name: string){}
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public middleName: string, public lastName: string){}
  }
}

const me1 = new Japanese.Tokyo.Person('Raido');
console.log(me1);

const me2 = new Japanese.Osaka.Person('Raidon');
console.log(me2);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);