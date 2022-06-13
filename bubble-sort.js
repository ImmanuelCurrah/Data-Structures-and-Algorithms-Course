/**
 * Bubble sort
 *
 * not commonly used, or efficient
 * but a good intro into sorting algos
 *
 * its called bubble sort because the larger values will bubble to the top one at a time
 */

//my try at bubble sort

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([2, 5, 6, 7, 23, 4, 6, 23, 2, 3, 4, 5, 99, 8, 7]));

//what the video did
//not the optimal solution

const notOptimalBubbleSort1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//this cuts down the amount of comparisons versus the one of above
const notOptimalBubbleSort2 = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//optimization for if arr is almost sorted

const optimalBubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(optimalBubbleSort([3, 4, 5, 8, 7, 9, 2, 10, 11]));
