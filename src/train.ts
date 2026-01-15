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

// function sumOdds(numbers: number): number {
//   let sum: number = 0;
//   for (let i = 1; i < numbers; i += 1) {
//     if (i % 2 !== 0) {
//       sum++;
//     }
//   }
//   return sum;
// }

// console.log(sumOdds(11));
// console.log(sumOdds(9));

// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};

//   for (const char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }

// console.log(countChars('hello')); // {h: 1, e: 1, l: 2, o: 1}

// function chunkArray(array: number[] | string[], size: number) {
//   const result = [];

//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }

//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// console.log(chunkArray(['a', 'b', 'c', 'd', 'e', 'f'], 3));

// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   for (const prop in obj) {
//     if (prop === key) {
//       count++;
//     }

//     if (typeof obj[prop] === 'object' && obj[prop] !== null) {
//       count += countOccurrences(obj[prop], key);
//     }
//   }

//   return count;
// }

// console.log(
//   countOccurrences(
//     { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } },
//     'model'
//   )
// );

// function findIntersectionNumbers(arr1: number[], arr2: number[]): number[] {
//   const set1 = new Set(arr1);
//   const intersection: number[] = [];

//   for (const num of arr2) {
//     if (set1.has(num)) {
//       intersection.push(num);
//     }
//   }

//   return intersection;
// }

// console.log(findIntersectionNumbers([1, 2, 3, 4], [3, 4, 5, 6]));

// function sumEvens(numbers: number[]): number {
//   return numbers.reduce((sum, num) => {
//     return num % 2 === 0 ? sum + num : sum;
//   }, 0);
// }

// console.log(sumEvens([1, 2, 3]));

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));

// const changeNumberInArray = (
//   index: number,
//   arr: number[],
//   newValue: number
// ): number[] => {
//   arr[index] = newValue;
//   return arr;
// };

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); // [1, 2, 7, 2]

// const removeDuplicate = (str: string): string => {
//   return [...new Set(str)].join('');
// };

// console.log(removeDuplicate('stringg')); // 'string'

// /**
//  * @param str String to capitalize
//  * capitalizeWords()
//  */
// const capitalizeWords = (str: string): string => {
//   return str
//     .split(' ')
//     .map((word) =>
//       word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word
//     )
//     .join(' ');
// };

// console.log(capitalizeWords('name should be a string'));
// const toSnakeCase = (str: string): string => {
//   return str.toLowerCase().split(' ').join('_');
// };

// console.log(toSnakeCase('name should be a string'));

// function findDisappearedNumbers(arr: number[]): number[] {
//   const max = Math.max(...arr);
//   const set = new Set(arr);
//   const result: number[] = [];
//   for (let i = 1; i <= max; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7]));

// TASK ZI
//function delayHelloWorld(message: string): Promise<string> {
//  return new Promise((resolve) => {
//    setTimeout(() => {
//      resolve(message);
//    }, 3000);
//  });
//}

// delayHelloWorld('Hello World!').then(console.log);

// function reduceNestedArray(arr: any[]): number {
//   return arr.flat(Infinity).reduce((a, b) => a + b, 0);
// }

// console.log(reduceNestedArray([1, [1, 2, [4]]]));

// function printNumbers() {
//   let count = 1;
//   const interval = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count > 5) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// printNumbers();

// function stringToKebab(str: string): string {
//   // I added a bit complexity to the function
//   return str.toLowerCase().replace(/\s+/g, '-');
// }

// console.log(stringToKebab('I love Kebab and nodejs too'));

// function squareDigits(num: number): string {
//   return num
//     .toString()
//     .split('')
//     .map((digit) => Math.pow(Number(digit), 2))
//     .join('');
// }

// console.log(squareDigits(9119));
// console.log(squareDigits(765));

// TASK ZN
// function rotateArray(arr: any[], index: number): any[] {
//   const rotatePoint = arr.length - index;
//   return [...arr.slice(rotatePoint), ...arr.slice(0, rotatePoint)];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

// TASK ZO
// function areParenthesesBalanced(str: string): boolean {
//   let openCount = 0;
//   let closeCount = 0;

//   for (const char of str) {
//     if (char === '(') {
//       openCount++;
//     } else if (char === ')') {
//       closeCount++;
//     }
//   }

//   return openCount === closeCount;
// }

// console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));
// console.log(areParenthesesBalanced('string()ichida(qavslar)soni(balansda'));

// TASK ZP
// function countNumberAndLetters(str: string): {
//   number: number;
//   letter: number;
// } {
//   let numberCount = 0;
//   let letterCount = 0;

//   for (const char of str) {
//     if (/[0-9]/.test(char)) {
//       numberCount++;
//     } else if (/[a-zA-Z]/.test(char)) {
//       letterCount++;
//     }
//   }

//   return { number: numberCount, letter: letterCount };
// }

// console.log(countNumberAndLetters('string152%¥'));

// TASK ZQ
function findDuplicates(arr: number[]): number[] {
  const countMap: Record<number, number> = {};
  const duplicates: number[] = [];

  for (const num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (const num in countMap) {
    if (countMap[num] >= 2) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));
