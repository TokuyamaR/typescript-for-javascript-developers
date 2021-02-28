export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight:number;
};

// Pick: 一部の型だけ抜き出すユーティリティ
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// Omit: 一部の型だけ除外するユーティリティ
type SmallProfile = Omit<DetailedProfile, 'height'>;

// Omit型の解剖
type MyOmit = Pick<DetailedProfile, 'weight' | 'height'>;
type MySmallProfile = MyOmit;
