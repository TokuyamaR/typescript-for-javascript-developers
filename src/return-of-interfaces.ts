export {};

class Magician {}
class Monk {}

class Taro extends Magician{} // 通常一つのクラスしか継承できない

// interfaceを利用すると、複数のクラスに散らばった機能を多重継承して一つのクラスを作成することができる

interface Sage { // interfaceで多重継承可能なクラスのような機能を作成することができる
  ionazun(): void;
}

interface Warrior {
  attack(): void;
}

class Jiro implements Sage, Warrior { // imprements(実装)を記載することでinterfaceの多重継承(正確には実装)ができる
  ionazun(): void {
    console.log('ionazun');
  }

  attack(): void {
    console.log('attack');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.attack(); // Sage, Warriorの両クラスを継承できていることがわかる

