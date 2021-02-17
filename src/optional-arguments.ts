export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
  ): number => {
    const bmi = weight / (height * height);

    if(printable){
      console.log(bmi);
    }
    return bmi;
  }
  // bmi(身長, 体重, console.logで出力するかどうか)
  // case1 : bmi(身長, 体重, true)
  // case2 : bmi(身長, 体重, false)
  // case3 : bmi(身長, 体重)
  bmi(1.71, 64);