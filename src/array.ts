export {};

let array1: number[] = [1, 2, 4, 8, 16];
let array2: Array<number> = [1, 3, 5, 7, 9]; // 非推奨

console.log(array1);
console.log(array2);

let multiArray: number [][] = [
  [10, 20, 40],
  [40, 10000, 60]
]

let array3:(number|boolean|string|(number|string)[])[] = [1, false, 'japan', [1, 2, 3, 'india']];

console.log(array3);
