export {};

// Parameters 関数の引数の型を取り出す
const debugProfile = (name: string, age: number) => {
  console.log({name, age});
};

debugProfile('Raido', 29);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Miho', 28];

debugProfile(...profile);

// 定義元
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P // 引数の型を推論して真ならばその型を返している
  ) => any
  ? P
  : never;
