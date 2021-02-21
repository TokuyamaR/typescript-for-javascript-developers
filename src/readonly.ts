export {};
class VisaCard {
  constructor(public readonly cardNumber: number){}
  // constructorの簡略気泡がtypescript独特のため、readonly前のpublicは省略しない方がエラーも起こらずベター
}
let card = new VisaCard(123412341234);

console.log(card.cardNumber);
// card.cardNumber = 333333333333; // error