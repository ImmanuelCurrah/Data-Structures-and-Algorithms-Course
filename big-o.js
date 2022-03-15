/**
 * What is big o?
 *
 * Big O is a system to compare the performance of code.
 * This starts to really matter for very large pieces of data.
 *
 * It gives us a precise vocabulary to talk about how our code preforms and gives us a starting platform to figure out what code works best in what situation.
 *
 * Helps with debugging if your code is taking to long or working inefficiently.
 * Comes up in interviews a lot.
 */

//-------------------------------------------------------------------------------------------------------------
/**
 * Timing our code
 * In the example below, which is better????
 *
 * Faster? Less memory? More readable? How brief is it?
 *
 * first one takes 1.25 seconds, but it may vary from each time its run
 * this is using the performance.now() function built into javascript
 * the second one takes way less time and varies way less
 * this way of doing it may not be the best because machines have problem with time. Its not reliable.
 *
 */

//first solution
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(100));

//second solution
function addUpToTwo(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpToTwo(100));

/**
 * Counting Operations
 *
 * Rather then counting seconds we can count the number of simple operations a computer has to run.
 * This way we don't have to make a ton of tests which would in the long run be very tedious.
 *
 * In the above example for we have multiplication, addition, and division. These are operations that the computer has to run. That means the second algo has to run three simple operations.
 *
 * The first solution has addition, but it is determined by how large n is. So we have n operations.
 * The = sign is an assignment which would also be determined by n.
 * The ++ is another operation which counts as 2, and grows as n grows. They scale with n.
 * total = 0 is one assignment that only happens once, as the same with i = 1
 * we have a comparison that scales with n i <= n.
 *
 * This could be as high as 5n + 2, but it doesn't really matter.
 * Regardless of how high 5n can go ie. 50n
 * The point is as n grows, so does the number of operations.
 *
 * What we are looking for, is general trends.
 */

/**
 * Official Intro into Big O
 * Big o is a formal language for talking about the relationship of the input of a function to the runtime of a function.
 *
 * This means we care only about the broad trends.
 *
 * We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
 *
 * f(n) could be linear (f(n) = n)
 * as n scales the runtime scales
 * o(n)
 *
 * f(n) could be quadratic (f(n) = n^2)
 * as n grows the runtime squares with n, meaning it grows a lot
 * o(n^2)
 *
 * f(n) could be constant (f(n) = 1)
 * or as n grows the runtime doesn't really change
 * o(1)
 */

/**
 * Simplifying Big O Notation
 *
 * O(2n) => O(n)
 * O(500) => O(1)
 * 0(13n^2) => O(n^2
 *
 * O(n^2 + 5n + 8) => O(n^2)
 * We are just looking for the general trends, meaning that the longest it takes is the worst case and we will quantify it as that.
 *
 * Arithmetic operations are constant, assignment variables are constant
 * Accessing elements in an array by index or key is constant
 *
 * Loop complexity is the length of the loop * whatever is happening inside that loop
 *
 *
 */

/**
 * Big O Notation Time Complexity Quiz 1
 *
 * Simplify the big O expression as much as possible - O(n + 10)
 * O(n)
 *
 * O(100 * n)
 * O(n)
 *
 * O(25)
 * O(1)
 *
 * O(n^2 + n^3)
 * O(n^3)
 *
 * O(n+n+n+n)
 * O(n)
 *
 */

/**
 * Big O Time Complexity Quiz 2
 * 
 * Determine the time complexity for the following function 

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
 * O(n)
 * 
 * function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
 * O(1)
 * 
 * function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
 * O(n)
 * 
 * function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
 * O(n)
 * 
 * function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
 * O(n^2)
 */

/**
 * Space Complexity
 * This is the amount of memory that is taken up
 *
 * Auxiliary Space Complexity - space required by the algorithm but not the space taken up by the inputs
 * this is what we mean when we talk about space complexity
 *
 * most primitives are constant space - boolean, numbers, undefined
 *
 * strings are 0(n) space, if the string grows to 50 characters it takes up that much more then 1
 * references are generally O(n), where n is the length of an array or keys of an object
 *
 * Again we are trying to simplify it down to the fuzziest concept, going for the general trends rather then focusing on all the space thats taken up by the algorithm
 *
 *
 */

/**
 * Big O Space Complexity Quiz
 * 
 * Determine the space complexity for the following function  

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
 * O(1)
 * 
 * function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
 * O(1)
 * 
 * function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
 * O(1)
 * 
 * function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
 * O(n)
 * 
 * function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
 * O(n)
 */

/**
 * Logarithms
 *
 * These are for describing more complicated space and time complexity
 *
 * Logarithm is the inverse of exponentiation
 * log base 2 (8) = 3
 * Log base 2 (value) = 2^exponent = value
 *
 * log === log base 2
 *
 * This isn't a math course so for the sake of simplicity
 * The logarithm of a number roughly measures the number of times you can divide that number by 2 before you a value thats less than or equal to one.
 *
 * Logarithm time complexity is great!
 * Meaning that it is very fast
 * if you have a O(log n) that is a very efficient algo
 */
