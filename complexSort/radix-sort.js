/**
 * Radix Sort
 *
 * radix sort does not make comparisons to get over the problem with comparison sort and make it faster than O n log n
 *
 * Needs numbers
 *
 * Radix sort exploits the fact that the "value" of a number is represented by the size of the number
 *
 * So it creates these "buckets" that go from 1 to 9
 *
 * It checks the numbers inside the numbers from left to right and puts them in the buckets accordingly
 *
 * It then takes the numbers out in order from the first ones that went in from 1 to 9 and repeats until it goes through the largest number
 *
 * This is how it sorts an array without ever comparing the numbers.
 *
 * This is also why they data needs to be numerical to work.
 */

//my code for the get digit helper

const myGetDigit = (num, place) => {
  const digit = num.toString().split("").reverse();
  return +digit[place];
};

// console.log(myGetDigit(45439, 1));

//videos get digit

const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// console.log(getDigit(45439, 1));

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (nums) => {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(
  radixSort(
    Array.from({ length: 1200 }, () => Math.floor(Math.random() * 10000))
  )
);
