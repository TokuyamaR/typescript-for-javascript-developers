export {};

// ReturnType 戻り値の型を取得する

function add(a: number, b: number) {
  return a + b;
};

console.log(add(1, 2));

type ReturnTypeOfAdd = ReturnType<typeof add>;　// ReturnTypeOfAddはnumber型となる
