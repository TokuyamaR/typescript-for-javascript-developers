export {};

// 抽象クラスは必ずoverrideしなければならない
// 継承先でoverrideをし忘れるとエラーが出るので、実装忘れることを防ぐ役割もある
abstract class Animal {
  abstract cry(): string; // 抽象メソッドは抽象クラスの中だけで宣言できる
}

class Lion extends Animal {
  cry(){
    return 'Loar!!';
  }
}

class Tiger extends Animal {
  cry(){
    return 'Grrr!!';
  }
}

