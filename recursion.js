/**
 * Recursion
 *
 * What is recursion?
 *
 * It is a process that calls itself,
 * referring to a function that calls itself
 */

/**
 * The Call Stack
 *
 * There a special order in which things happen
 * This is managed by the call stack, it is a data structure called a stack
 *
 * Below is a set of functions to demonstrate the order of the call stack
 *
 * Recursive function add function to the call stack endlessly
 */

const takeShower = () => {
  return "Showering";
};

const eatingBreakfast = () => {
  let meal = cookFood();
  return `Eating ${meal}`;
};

const cookFood = () => {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
};

const wakeUp = () => {
  takeShower();
  eatingBreakfast();
  console.log("Ok ready for work");
};

/**
 * First recursive function
 *
 * Base Case - this is where the recursion stops
 * just like a while loop must have somewhere to stop
 */

//example for ending recursion

const countDownRecursively = (num) => {
  // this give the condition for the end
  if (num <= 0) {
    console.log("all done");
    return;
  }
  //prints the number
  console.log(num);
  //subtracts one from num
  num--;
  // recalls the function with the new number
  countDownRecursively(num);
};
// how if can be written iteratively
const countDownIteration = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done");
};

/**
 * second example
 */

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};
//can you spot the base case?
// line 76 is the base case, it give it a number where it just returns 1

//where is the difference input?
//each time we call sumRange we are calling it will num minus one

//what would happen if we didn't return?
//infinite loop
