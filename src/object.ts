export {};

// 非推奨：この形式だと代入の制約が甘いため、想定外のデータに置き換わってしまうなどのリスクがある
let profile1: object = {name: 'toku'};
profile1 = {birthYear: 1991};
console.log(profile1); 

// 推奨：{}にてアノテーションを行うと、プロパティに対しても型指定ができる
let profile2: {name: string} = {name: 'toku'};
profile2 = {name: 'miso'};