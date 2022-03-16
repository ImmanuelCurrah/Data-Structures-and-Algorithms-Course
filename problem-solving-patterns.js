/**
 * Frequency Counter Pattern
 *
 * Using an object to collect a bunch of values and their frequency
 *
 * This can be used to avoid O(n^2)
 */

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

/**
 * Frequency Counter Anagram
 *
 */

const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

/**
 * Multiple Pointers pattern
 *
 * Create pointers or values that correspond to an index or position
 *
 * function where the it accepts a sorted array of integers and finds the first pair that's sum is 0
 */

const sumZero = (arr) => {
  // creat the left pointer
  let left = 0;
  // create the right pointer
  let right = arr.length - 1;
  // looping through the array based on a condition
  while (left < right) {
    //defining the sum using our pointers
    let sum = arr[left] + arr[right];
    // if the sum is zero, return the pair
    if (sum === 0) {
      return [arr[left], arr[right]];
      // if the sum is greater then 0, subtract from right, because it is ordered
    } else if (sum > 0) {
      right--;
      // if it is less then one add to the left, again because it is ordered
    } else left++;
  }
};

/**
 * Count Unique Values
 *
 * counts the unique values in an array, the array will be sorted
 */

const countUniqueValues = (arr) => {
  // set our first pointer
  let i = 0;
  // set up a loop with out second pointer which is going to be one ahead of i
  for (let j = 1; j < arr.length; j++) {
    // check if they dont match then move i up, if they do match j will automatically move up
    if (arr[i] !== arr[j]) {
      i++;
      // setting the value at that index to the value of j, essentially moving it down the array
      arr[i] = arr[j];
    }
  }
  // returning the index of i and adding 1 because its a 0 based index, check to see if length is zero to return zero
  return arr.length === 0 ? 0 : i + 1;
};

/**
 * Sliding Window Pattern
 *
 * this pattern creates a window that can either be an array or number from one position to another
 *
 * depending on a certain condition the window either increases or closes and a new window is created
 */

/**
 * Find the max sum in an array with the given number
 */

const maxSubarraySum = (arr, num) => {
  //setting our max and temp sums, these will change
  let maxSum = 0;
  let tempSum = 0;
  //checking if number we need a subarray of is larger then the array length
  if (arr.length < num) return null;
  // storing together the first three digits to set the initial max sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // setting the temp sum to max sum so they are starting equally
  tempSum = maxSum;
  // looping through the array by its length
  for (let i = num; i < arr.length; i++) {
    // adding and subtracting the first and last number of each subarray
    tempSum = tempSum - arr[i - num] + arr[i];
    // taking the max between the two
    maxSum = Math.max(maxSum, tempSum);
  }
  // returning our result
  return maxSum;
};

/**
 * Divide and Conquer Pattern
 *
 * Involves dividing a data set into smaller chunks and then repeating a process with a subset of data
 * This can tremendously decrease time complexity
 */

/**
 * given a sorted array of integers write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
 */

const search = (array, val) => {
  //set our min and max
  let min = 0;
  let max = array.length - 1;
  // set a loop[ that runs as long as min is less then max so there is something to end it
  while (min <= max) {
    //set the middle
    let middle = Math.floor((min + max) / 2);
    //set the current element
    let currentElement = array[middle];
    //if the val is less then the current element
    if (array[middle] < val) {
      //reset the min value to less
      min = middle - 1;
      //if the current value is greater then the value set
    } else if (array[middle] > val) {
      //change the value of max to less
      max = middle - 1;
    } else {
      //return the middle
      return middle;
    }
  }
  //if the search is false return -1
  return -1;
};
