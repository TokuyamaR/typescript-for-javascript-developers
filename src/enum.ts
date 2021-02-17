export {};

// enum：列挙に用いる

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

// 自動で連番を付与してくれる(連番の開始番号も1箇所指定すれば済む！)
// JSだとkey: valueで記載が必要なため、記述量も少なく済む
console.log(Months.February); // 2
console.log(Months.October); // 10
console.log(Months.May); // 5

enum Colors {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#FF0000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = Colors.GREEN;
console.log(green);

// enumは途中追加も可能
enum Colors {
  GRAY = '#808080'
}

console.log(Colors.GRAY);