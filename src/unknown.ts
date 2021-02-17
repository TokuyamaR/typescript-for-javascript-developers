export {};


let kansu = (): number => 43;
let numebrAny: any = kansu();
let numebrUnknown: unknown = kansu();

let sumAny = numebrAny + 10;
console.log(numebrUnknown) // number
// let sumUnKnown = numebrUnknown + 10; // error

// 条件ブロックでtypeofを利用して型を制限することでtypescriptが型を理解してエラーを避けることができる
// => 型ガード(★重要★)
// any型を流用しすぎると、コンパイルエラーは回避できても実行時にエラーが起きた際に原因を特定しづらい
// unknown型の型ガードなどで型を絞り、型安全を確保する
if(typeof numebrUnknown === 'number') { 
  let sumUnKnown = numebrUnknown + 10;
}