/**
 * Frequency Counter - sameFrequency
 *
 * Find out if the two numbers have the same frequency of digits
 * it must be O(n)
 */

const sameFrequency = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    counter1[str1[i]] = (counter1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    counter2[str2[j]] = (counter2[str2[j]] || 0) + 1;
  }

  for (let value in counter1) {
    if (counter1[value] !== counter2[value]) return false;
  }

  return true;
};

/**
 * Find if there are duplicates in the variable of inputs given in the
 */

const areThereDuplicates = (...args) => {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};
// console.log(areThereDuplicates(1, 2, 2, 2, 3, 3, 3, 4));

/**
 * Write a function that takes a sorted array of integers and determines the pair values in the array where the average of the pairs equals the target average
 */

const averagePair = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === target) return true;
    else if (avg < target) start++;
    else end--;
  }
  return false;
};
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

/**
 * Take two strings and check whether the characters in the first string form a subsequence of the characters in the second string
 */

const isSubsequence = (firstWord, secondWord) => {
  let first = 0;
  let second = 0;
  if (!firstWord) return true;
  while (second < secondWord.length) {
    if (secondWord[second] === firstWord[first]) first++;
    if (first === firstWord.length) return true;
    second++;
  }
  return false;
};

/**
 * write a function that takes a subarray and finds the max sum in the array
 */

const maxSubarraySum = (arr, num) => {
  if (arr.length < num) return false;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
};

/**
 * write a function that takes two parameters, an array, and a number. Return the smallest subarray that equals the target number
 */

const minSubarrayLen = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    //if current window doesn't add up to the given sum then move the window to the right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reached the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

/**
 * return the longest substring of a string with all unique characters
 */

const findLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};
