export {};

let isFinished: boolean = true;
isFinished = 1; // Javascriptだとエラーを検知せず、再代入が可能となる。
//　型指定によって型安全を確保するのがTypesciptを導入する最大の目的