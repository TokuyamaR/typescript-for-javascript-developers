export {};

// function double(value: number): number;
// function double(value: string): string;

// function double(value: any): any {
//   console.log(typeof value);
//   if (typeof value === 'number') {
//     return value * 2;
//   } else {
//     return value + value;
//   }
// }

// console.log(double(100));
// console.log(double('Go '));

function double(value: string): string;
function double(value: number): number;

function double(value: any): any {
  if(typeof value === 'string') {
    return value + value;
  } else {
    return value * 2;
  }
}

console.log(double('GO '));
console.log(double(100));