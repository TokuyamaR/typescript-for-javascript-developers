export {};

let name: any = 'Raido';
// let length = name.length;

// length = 'Foooo'; // nameがany型なのでlengthもany型と推論され、数値型が望ましいlengthの変数に文字列が代入できてしまう


let nationality: any = 'Japan';
let length = (nationality as string).length; 
// as 型 で型アサーションを行うことができる。
// nationalityの型を文字列型を明示することで、lengthの型もnumberとtypescirpt側に推論させることができている
// よって、lengthに次行で文字列型が代入できないようになっている。
// length = 'Foooo'; // error