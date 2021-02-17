export {};

type Mojiretsu = string; // typeで宣言するalliaは大文字

const fooString: string = 'string';
const fooMojirestu: Mojiretsu = 'Mojiretsu';

// 通常の設定(個別設定。流用しづらい)
type profileType1 = {
  name: string,
  age: number,
  address: string,
}

const profile1:profileType1 = {
  name: 'toku',
  age: 29,
  address: 'Tokyo'
}

// 再利用しやすいtype設定(すでにある構造から型推論を行い暗黙的にアノテーションを実施。)
type profileType2 = typeof profile1;

const profile2:profileType2 = {
  name: 'toku',
  age: 29,
  address: 'Tokyo'
}