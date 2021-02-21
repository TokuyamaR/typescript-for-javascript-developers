export {};


// const echo = (arg: string): string => {
//   return arg;
// }
// 
// const echo = (arg: number): number => {
//   return arg;
// }

// 処理内容は一緒だが、引数と戻り値の型だけが違う
// 型も指定できるようにすれば、メソッドの実装コストを削減できる

const echo = <T>(arg: T): T => { // <T>の部分で型指定を行う
  return arg;
}

console.log(echo<number>(1));
console.log(echo<string>('hello'));
console.log(echo<ConstrainBoolean>(true));
// このように汎用的なメソッドやクラスに対して、特定の型を紐づけることがジェネリクス

class Mirror<T> { // クラス名の後ろに<Type>を記載することで、ジェネリクスの適用ができる
  constructor (public value: T){}

  echo(): T{
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());