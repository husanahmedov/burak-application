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
//
// interface NumberSquare {
//   number: number;
//   square: number;
// }
//
// function getSquareNumbers(numbers: number[]): NumberSquare[] {
//   return numbers.map((num: number) => {
//     return {
//       number: num,
//       square: num * num,
//     };
//   });
// }
//
// const numbersArray: number[] = [1, 2, 3, 5, 10];
// const squareObjects: NumberSquare[] = getSquareNumbers(numbersArray);

// const isPalindrome = (s: string): boolean =>
//   s.toLowerCase() === s.toLowerCase().split('').reverse().join('');

// console.log(isPalindrome('dad')); // true
// console.log(isPalindrome('dada')); // false

// const calculateSumOfNumbers = (param: any[]): number => {
//   let result: number = 0;
//   param.forEach((element) => {
//     typeof element === 'number' ? (result += element) : '';
//   });
//   return result;
// };

// console.log(calculateSumOfNumbers([4, 5, 'salom', { number: 10 }, 4]));

// function missingNumberFunc(nums: number[]): number {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = nums.reduce((acc, num) => acc + num, 0);
//   return expectedSum - actualSum;
// }

// console.log(missingNumberFunc([3, 0, 1]));

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   let arr: number[] = [];
//   arr1.forEach((a: number) => {
//     arr.push(a);
//   });
//   arr2.forEach((a: number) => {
//     arr.push(a);
//   });

//   return arr.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 2, 0], [1, 3, 0, 0]));

function sumOdds(numbers: number): number {
  let sum: number = 0;
  for (let i = 1; i < numbers; i += 1) {
    if (i % 2 !== 0) {
      sum++;
    }
  }
  return sum;
}

console.log(sumOdds(11));
console.log(sumOdds(9));
