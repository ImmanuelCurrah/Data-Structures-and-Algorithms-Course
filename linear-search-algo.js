/**
 * Linear Search
 */

/**
 * Focus on searching arrays
 */

/**
 * Look at every single element in order and check if its what we want
 *
 * This means starting at index 0 until we find the value that we are looking for
 *
 * This can be effective for unsorted data, if its sorted data though there are better ways
 */

// My own try to right a linear search code

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};
// checking the algo
console.log(linearSearch([1, 2, 3, 4, 5], 3));

// The video's solution

const searchLinear = (arr, val) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

//This is O^n because there is one for loop
