/**
 * Merge Sort
 *
 * created in 1948
 *
 * Splitting up, merging, and sorting
 *
 * takes into account that arrays of 0,1 are already sorted,
 * it exploits this to split up a large array into small arrays that are already sorted
 * it then merges them together in a sorted way
 *
 *
 *
 */

//code to merge two sorted arrays

//my attempt, gonna leave the code hear even if its all wrong

const mergeAttempt = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (
    i < arr1.length &&
    i < arr2.length &&
    j < arr1.length &&
    j < arr2.length
  ) {
    let right = arr1[i];
    let left = arr2[j];
    if (right < left) {
      result.push(right);
      i++;
    } else {
      result.push(left);
      j++;
    }
  }
  //added code after the video
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  //code above was added after video, making it work 100%
  return result;
};

//so I just forgot to take care of an edge case where they are different lengths or the same number
console.log(
  mergeAttempt([2, 3, 4, 5, 6, 7, 8], [3, 4, 5, 66, 77, 88, 99, 100])
);

//videos code
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// console.log(merge([2, 3, 4, 5, 6, 7, 8], [3, 4, 5, 66, 77, 88, 99, 100]));
