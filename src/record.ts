export {};

// Record型:2つのジェネリクス型の引数を持つ型
// Record<K ,T>
// Kにはunion型を指定


type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};


// 愚直にアノテーションを行うと、繰り返し記載が必要
// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Chiba: Covid19InfectionInfo;
//   Tottori: Covid19InfectionInfo;
// } = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
//   Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
// }

// Recordを利用して２種類のアノテーションを同時に行うことができる
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
}
