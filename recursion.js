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
 *
 */
