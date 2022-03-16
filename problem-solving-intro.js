/**
 * What is an algorithm? And how do you devise a plan to solve one?
 * It is a process or set of steps to accomplish a task
 *
 * Almost everything we do in programming involves some sort of algorithm, meaning that there is a problem to be solved or a task that needs to be done.
 *
 * How do you get better at interviews and solving problems?
 * 1. Devise a plan for solving problems, this is non technical
 * 2. Master common problem solving patterns
 *
 * -understand the problem
 * -explore concrete examples
 * -break it down
 * -solve/simplify
 * -look back and refactor
 *
 */

/**
 * Understanding the Problem
 *
 * write a function that takes to number and returns their sum
 *
 * Can I restate the problem in my own words? => Implement addition
 * What are the inputs that go into the problem? => Int? Float? What about large numbers?
 * What are the outputs that should come from the solution? => same as above
 * Can the outputs be determined from the inputs? => If someone passes one number?
 * How should I label the important pieces of data that are part of the problem?
 *
 */

/**
 * Exploring Concrete Examples
 *
 * Start with simple examples after restating the problem
 * Progress to more complex examples
 * Examples with empty inputs
 * Examples with incorrect input
 */

/**
 * Break it Down
 *
 * Communicate step by step what you are doing
 * This forces you to think about your code before you write it
 * And catch questions or things you dont understand about the problem
 */

/**
 * Solve or Simplify
 *
 * Solve the problem or if its too complicated solve a simpler problem
 */

const object = (str) => {
  // make oject to return at end
  result = {};
  // loop over string for each char..
  for (let i = 0; i < str.length; i++) {
    // set a variable for lowercase
    const char = str[i].toLowerCase();
    // if char is something other then an alphanumeric component => not tackled yet, so the simple part is done
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter and is a key in object add one to count
      if (result[char] > 0) {
        result[char]++;
      } else {
        // if the char is not in the object already add it and set value to 1
        result[char] = 1;
      }
    }
  }
  //return object at the end
  return result;
};

/**
 * Look back and refactor
 *
 * Can be tempting to just accept something that just works
 * In most jobs that is okay, but it is important to strive for those goals
 *
 * Going back and refactoring your code can be a great practice to make it more efficient
 */

const object2 = (str) => {
  result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
};

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
};

console.log(
  object2(";ajdhf;lehafea8452 falfkdafe 23052374#@^$#@^ $#@ fakjlfhea")
);
