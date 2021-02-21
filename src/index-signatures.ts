export {};

// How to write index signature(objectのindexに対してアノテーションを署名する)
// { [index: typeForIndex]: typeForValue }
// interfaceを利用することで型アノテーション部分を簡略化できる

interface Profile {
  name: string,
  isJapanese: boolean,
  [index: string]: string | number | boolean // 必須プロパティ(name, isJapanese)を含めてvalueの型をアノテーションする必要がある
}

let profile: Profile = {
  name: 'Raido',
  isJapanese: false,
}

profile.age = 28;
profile.isJapanese = true;
