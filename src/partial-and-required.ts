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

type Profile2 = {
  name: string,
  age: number,
  sex?: string
  zipCode?: number,
  address?: string,
  phoneNumber: number,
  isJapanese?: boolean
}

// Profileのプロパティを全てoptionalに
type PartialProfile = Partial<Profile>;
type RequiredProfile = Required<Profile2>;