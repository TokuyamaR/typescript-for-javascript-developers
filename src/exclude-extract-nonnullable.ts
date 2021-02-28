export {};

// exclude : 特定の型だけを除外するユーティリティ型
// Exclude<全体, 除外したい型>
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctonTypes = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // NonFunctonTypesと同じ結果を得ることができる(Functionは関数の型の総称)

// extract : 特定の型だけを取得するユーティリティ型
// Extract<全体, 取得したい型>
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>　// FunctionTypeByExtractと同じ結果を得ることができる(Functionは関数の型の総称)
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>

// nonNullable : 全体からnone, undefinedを取り除いてくれるユーティリティ型
// NonNullable<全体>
type NullableTypes = string | number | null | undefined;
type NonNullabeTypes = NonNullable<NullableTypes>;
