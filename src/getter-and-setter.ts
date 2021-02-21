export {};

// 今回の要件
// * owner
//  * 所有者
//  * 初期化時に設定
//  * 変更不可
//  * 参照可能
// * secretNumber
//  * 秘密番号
//  * 初期化時に設定
//  * 変更可能
//  * 参照不可
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(){
    return this._owner;
  }

  set secretNumber(secretNumber: number){
    this._secretNumber = secretNumber;
  }

  debugPrint(){
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Raido', 1234567890);
console.log(card)
console.log(card.debugPrint());
card.secretNumber = 7777777777;
console.log(card.debugPrint());
console.log(card);

