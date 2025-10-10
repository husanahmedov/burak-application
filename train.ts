/**
 * @param arr Number containing array
 * which a number needed to be found as a largest integer in the array
*/
const getHighestNumberIndex = (arr: number[]): number => {
   let largestNumber: number = 0;
   arr.forEach((element: number) => {
    if(element > largestNumber) {
        largestNumber = element
    }
   })
   return arr.indexOf(largestNumber)
}

console.log(getHighestNumberIndex([1, 4, 30, 7, 60]));