export {};

// never: returnを返すことのない関数関数に使用。使用シーンが非常に限られるため、覚えてしまった方が楽
function error(message: string):never {
  throw new Error(message);
}
try {
  let result =  error("test");
} catch(error) {
  console.log(error);
}

// voidとの混同
// https://typescript-jp.gitbook.io/deep-dive/type-system/never
// 関数が正常に終了することがないとき、neverが返されると知ると、直感的にvoidと同じように考えたくなるでしょう。
// しかし、voidは部品です。neverはうそつきです。
// 何も返さない関数はvoidを返します。しかし、returnを返すことのない関数(または常にスローする)はneverを返します。voidは(strictNullCheckingなしで)代入することができるものですが、neverはnever以外のものに代入することはできません。

let foo: void = undefined;
let bar: never = error('test'); // 唯一エラーだけ代入できる