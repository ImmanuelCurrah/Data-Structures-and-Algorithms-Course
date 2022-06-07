/**
 * Binary Search
 */

/**
 * Binary search only works on ORDERED ARRAYS
 *
 * Binary search works by a divide and conquer method
 * split the array down the middle, check if the index of the desired value is greater than or less than the middle
 *
 * Whichever is true, you ditch the half that is false and continue until you reach the value you are looking for
 */

//My code for binary search
const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

//videos version

const searchBinary = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
};
