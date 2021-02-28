export {};

type Profile = {
  name: string,
  age: number,
  sex: string
  zipCode: number,
  address: string,
  phoneNumber: number,
  isJapanese: boolean
}

type PartialProfile = Partial<Profile>;

type Optional<T> = {[P in keyof T]?: T[P];}; // Partialの定義元をコピー
// P in keyof TはオブジェクトTのプロパティ名を一個ずつ取り出している
// Partilaはmapped types

type OptionalProfile = Optional<Profile>;