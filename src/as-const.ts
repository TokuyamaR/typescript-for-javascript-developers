export {};

let name = 'Raido';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro'; // nicknameはHam型となるため、Ham以外が代入できない(実質constの役割となる)


let profile = {
  name: 'Raido',
  height: 171,
  age: 28
} as const // objectにas constを記載すると全てのプロパティがreadonlyとなる(ネストしていても全て適用される！)

// profile.name = 'Raaaaido'; // as constで全てprofileのプロパティがreadonlyのため上書きできない
// profile.age = 25;
// profile.height = 180;

