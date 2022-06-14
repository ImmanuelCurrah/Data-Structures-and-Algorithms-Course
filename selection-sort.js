/**
 * Selection Sort
 *
 * reverse of bubble sort in a way
 *
 * puts the small numbers to the beginning
 * loops through and finds the smaller number and then will swap that smaller number to the beginning
 */

//my code

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
//this looks just like bubble sort?
//so basically I did just rewrite bubble sort is so many ways.
//what I was missing was the idea of tracking the LOWEST number after the loop and swapping that number with the first index in the array.

// console.log(selectionSort([2, 55, 66, 3, 4, 5, 3, 3, 2, 77, 88, 99, 8, 7]));

//videos way

const videoSelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
};
console.log(
  videoSelectionSort([2, 55, 66, 3, 4, 5, 3, 3, 2, 77, 88, 99, 8, 7])
);
