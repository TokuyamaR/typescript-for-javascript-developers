export {};

// tuple型：順序含めて型指定を行う(ユニオン型より制約を強める)
let profile:[string, number]  = ['toku', 29]; // tuple
let profile2:(string|number)[]  = ['toku', 29]; // union
profile = ['toku', 29];
profile2 = [29, 'toku'];
// profile = ['toku', 29];

console.log(profile);
console.log(profile2);