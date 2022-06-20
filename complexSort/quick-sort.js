/**
 * Quick Sort
 *
 * Uses a pivot number and recursion to sort the numbers around the pivot number
 *
 * Basically you choose a pivot number, then you put all the smaller numbers to the left.
 *
 * You put that number at the index of the last smallest number so you know that that is the right spot for it.
 *
 * You repeat this with the left and right side of the array until it is sorted.
 */

//my attempt at pivot helper

const myAttemptPivotHelper = (arr) => {
  let pivotIndex = 1;
  let tracker;
  let end = arr.length;
  for (let i = 1; i < end; i++) {
    if (arr[0] < arr[i] && !tracker) {
      tracker = arr[i];
    } else if (tracker) {
      break;
    }
    for (let j = tracker; j < end; j++) {
      console.log(tracker, arr[j]);
      if (arr[j] <= arr[0]) {
        let temp = arr[tracker - 1];
        arr[tracker - 1] = arr[j];
        arr[j] = temp;
        pivotIndex++;
        tracker = arr[j];
      }
    }
  }
  console.log(arr);
  console.log("pivotIndex", pivotIndex);
};

// myAttemptPivotHelper([3, 1, 2, 4, 66, 5, 3, 44, 2]);

//not perfect but I am going to continue so I don't waste to much time

//videos pivot helper

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i, j) => {
    // let temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, arr.right);
  }
  return arr;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
