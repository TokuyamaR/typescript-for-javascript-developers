export {};

// let dayOfTheWeek: string = '日';　// 型はあっているが想定外のデータが代入される可能性がある
let dayOfTheWeek: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';　// literal型

dayOfTheWeek = '月';
dayOfTheWeek = '31';　// リテラル型を用いることでtype error

// その他、数値や真偽値のリテラルも設置できる