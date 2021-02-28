export {};


type Profile = {
  name: string,
  age: number
}

const me: Profile = {
  name: 'Raido',
  age: 29
}

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Takeshi',
  age: 25
}

// friend.age++; // error ageはreadonlyなため

console.log(friend);

// readonlyの仕組み
type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
}
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
