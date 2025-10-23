/**
 * @param arr Number containing array
 * which a number needed to be found as a largest integer in the array
 */
// const getHighestNumberIndex = (arr: number[]): number => {
//    let largestNumber: number = 0;
//    arr.forEach((element: number) => {
//     if(element > largestNumber) {
//         largestNumber = element
//     }
//    })
//    return arr.indexOf(largestNumber)
// }

// console.log(getHighestNumberIndex([1, 4, 30, 7, 60]));

// /**
//  * @param arr Number containing array
//  * GetPositive()
//  * **/
//
// const getPositive = (param: number[]): string => {
//   let resultString: string = "";
//   const changedValue = param.filter((value) => value > 0);
//   changedValue.forEach((element: number) => {
//     resultString += element.toString();
//   });
//   return resultString;
// };
//
// getPositive([3, -7, -8, 9, 4]);

// /**
//  * @param str String
//  * findLongestString()
//  * **/
//
// const findLongestString = (str: string): string => {
//   // create variable array
//   // user for loop to access each word and store them to array variable
//   return str
//     .split(' ')
//     .reduce(
//       (longest, current) =>
//         current.length >= longest.length ? current : longest,
//       '',
//     );
// };
//
// console.log(findLongestString('I solved this algorithm with myself'));

/**
 * @param str String
 * countVowels()
 * K-TASK
 * **/

const countVowels = (str: string): string => {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  let countVowels: number = 0;
  for (let x = 0; x < vowels.length; x++) {
    for (let y = 0; y < str.length; y++) {
      if (vowels[x] === str[y]) {
        countVowels++;
      }
    }
  }
  return `Bu stringda ${countVowels} ta unli harf bor`;
};

console.log(countVowels('Noutbuk uchun test'));
