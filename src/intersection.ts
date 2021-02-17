export {};

type Pitcher1 = {
  throwingSpeed: number
}

type Batter1 = {
  battingAverage: number
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
}

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
}

// intersection(交差型)：既存の型を流用して型定義ができる

// 通常
// type TwoWayPlayer = {
//   throwingSpeed: number
//   battingAverage: number
// }

// intersection (Pither1, Batter1の型を流用)
type TwoWayPlayer = Pitcher1 & Batter1;

const otaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.267
}