/**
 * Insertion Sort
 *
 * Builds up the sort by gradually creating a larger half which is always sorted
 * It looks at each number and then inserts it to where it should belong
 *
 */

const insertionSortMe = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

//videos code
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    // THIS ONLY WORKS IF J IS SET TO VAR, IF SET TO LET IT BREAKS
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSortMe([2, 9, 7, 5, 8]));
