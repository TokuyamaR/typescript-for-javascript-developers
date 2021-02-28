export {};

// ReturnType 戻り値の型を取得する

function add(a: number, b: number) {
  return a + b;
};

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;　// ReturnTypeOfAddはnumber型となる

type MyReturnType<T extends (...args: any) => any> = T extends (　// (...args: any) => any は関数を意味している
  ...args: any
  ) => infer R　// どんな型がくるかわからないが、推論して拾い上げる役割がinfer
  ? R
  : any;

