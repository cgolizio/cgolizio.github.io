// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base case:
  // if n is 1 or 0 return 1
  if (n === 1 || n === 0) {
    return 1;
  }
  // base case:
  // if n is negative return null
  else if (n < 0) {
    return null;
  }
  // recursive case:
  // return the recursive function call, passing in n - 1, multiplied by the previous n value
  return factorial(n - 1) * n;
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base case:
  // if the array has no length (if the array is empty), return 0
  if (!array.length) {
    return 0;
  }
  // recursive case:
  // return the first item of the array, added to the recursive call of the array, with the first element sliced off each time
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {};

// 4. Check if a number is even.
var isEven = function(n) {
  // base case:
  // if n hits 0, then it means the original number was even so return true
  if (n === 0) {
    return true;
  }
  // base case:
  // if n hits 1, then it means the original number was odd so return false
  else if (n === 1) {
    return false;
  }
  // if the number is negative return the function called with n changed to positive
  else if (n < 0) {
    return isEven(-n);
  }
  // recursive case:
  // return the function called passing in n, subtracting 2 from n each time
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base case:
  // if n hits 0, that means were done recursing so pass 0 into the callstack and break out of the recursive calls
  if (n === 0) {
    return 0;
  }
  // recursive case:
  // if n is negative, add 1 to n and add that number to the recursive call of the function passing in n + 1
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1)
  }
  // recursive case:
  // if n is positive, subtract 1 from n and add that number to the recursive call of the function passing in n - 1
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var result = [];
  const z = y;
  // base case:
  // if x and y are the same number, or if there are no numbers between x and y, return the result array
  if (x === y || (y - x) === 1 || (x - y) === 1) {
    return result;
  }
  // recursive case:
  // if y is greater than x, return the result array, concatenated with x + 1, and the recursive call passing in x + 1 and y
  if (x < y) {
    return result.concat(x + 1, range(x + 1, y));
  }
  // recursive case:
  else {
    // if x is greater than y, return the result array, concatenated with x - 1, and the recursive call passing in x - 1 and y
    return result.concat(x - 1, range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base case:
  // if the exponent is 1, return the base
  if (exp === 1) {
    return base;
  }
  // base case:
  // if the exponent is 0, return 1
  else if (exp === 0) {
    return 1;
  }
  // recursive case:
  // if the exponent is negative, return the recursive call, passing in the base and the exponent adding 1 to it each time
  // the recursive call by the base
  if (exp < 0) {
    return exponent(base, exp + 1) / base;
  }
  // recursive case:
  else {
    // if the exponent is positive, return the base multiplied by the recursive call, passing in the base and the exponent
    // subtracting 1 from it each time
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case:
  // if n ends up being less than 1, then the original value of n is not a power of 2, so return false
  if (n < 1) {
    return false;
  }
  // base case:
  if (n === 1) {
    return true;
  }
  // recursive case:
  // return the recursive call passing in n, while dividing n by 2 each time
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // create an empty array to house the string characters towards the end of each recursive call
  var result = [];
  // base case:
  // if the string has no length, return the result array reversed and joined into a string
  if (!string.length) {
    return result.reverse().join('');
  }
  // push the first character of the string into the result array each time the function is recursively called
  result.push(string[0]);
  // recursive case:
  // return the result array, concatenated to the recursive call, passing in the string with one character sliced off each time
  // chain on the reverse method, to reverse the order of the result array
  // join the result array into a string
  return result.concat(reverse(string.slice(1))).reverse().join('');
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // set the string equal to itself but with each non-letter character(spaces) removed, and forced to lowercase
  string = string.replace(/[\W_]/g, '').toLowerCase();
  var first = string[0];
  var last = string[string.length - 1];
  // base case:
  // if the strings length is 0 or 1, return true
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  // recursive case:
  // if the first letter of the string is equal to the last letter of the string, return the recursive call passing in
  // the string, with the first and last letters sliced off each time
  if (first === last) {
    return palindrome(string.slice(1, -1));
  }
  else {
    // if the first and last letters are not the same, return false
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// base case:
// if x or y is equal to 0, return 0
// recursive case:
// if y is positive, return x added to the recursive call, passing in x and y, subtracting 1 from y each time
// if y is negative, return the recursive call passing in x and -y and set the whole recursive call to negative
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (y > 0) {
    return (x + multiply(x, y - 1));
  }
  if (y < 0) {
    return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base case:
  // if both strings are empty, return true
  if (!str1.length && !str2.length) {
    return true;
  }
  // base case:
  // if the current first character of the first string does not equal the current first character of the second string, return false
  if (str1[0] !== str2[0]) {
    return false;
  }
  // recursive case:
  // return the function called recursively, passing in the both strings, with each of their first characters removed
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // base case:
  // if the string is empty, return an empty array
  if (!str.length) {
    return [];
  }
  // recursive case:
  // put the first character of the string in an array and concatenate it to the recursive call passing in the string with the first
  // character sliced off; return this
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  // base case:
  // if the array is empty, return the array
  if (!array.length) {
    return array;
  }
  // recursive case:
  // return the recursive call, passing in the array, with the first element sliced off, concatenated with the first element of the array
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // base case:
  // if length value is equal to 0, return an empty array
  if (length === 0) {
    return [];
  }
  // recursive case:
  // force the value into an array literal, and concatenate it with the recursive call, passing in the value and length - 1, and return
  return [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case:
  // if the array is empty, return 0
  if (!array.length) {
    return 0;
  }
  // create a result variable, and initialize it to a ternary operation
  // if the first element in the array is equal to the value, return 1; if not, return 0
  var result = array[0] === value ? 1 : 0;
  // recursive case:
  // return the result operation added to the recursive call, passing in the array with its first element sliced off, and the value
  return result + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // base case:
  // if the array is empty, return the array
  if (!array.length) {
    return array;
  }
  // recursive case:
  // using array literal syntax, add the callback function passing in the first value of the array
  // concatenate this to the recursive call, passing in the array with the first element sliced off, and the callback function
  // return this
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base case:
  // if n is negative, return null
  if (n < 0) {
    return null;
  }
  // base case:
  // if n is 1 or 0, return n
  if (n < 2) {
    return n;
  }
  // recursive case:
  // return the recursive call passing in n - 1, added to another recursive call passing in n - 2
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // base case:
  // if the input array is empty, return the input array
  if (!input.length) {
    return input;
  }
  // recursive case:
  // using array literal syntax, add the first element of the input array, forced into uppercase
  // then concatenate it to the recursive call passing in the input array with the first element sliced off
  // return
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // base case:
  if (!array.length) {
    return array;
  }
  // recursive case:
  // using array literal syntax, add the first character of the first element of the input array, forced into uppercase, then add it to the
  // the first element (which is still in lowercase), without its first character
  // concatenate it to the recursive call passing in the array with the first element sliced off
  // return
  return [(array[0][0].toUpperCase() + array[0].slice(1))].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

// set the obj parameter to default to an empty object
var letterTally = function(str, obj = {}) {
  // base case:
  // if the string is empty, return the object
  if (!str.length) {
    return obj;
  }
  // if the object already has a key of the first (current) character of the string, then add 1 to the value at that key
  if (obj[str[0]]) {
    obj[str[0]]++;
  }
  else {
    // if the first (current) character of the string does not yet exist as a key of the object, then create the key within the object,
    // and set it equal to 1, since it is the first time that specific character has been encountered from within the string
    obj[str[0]] = 1;
  }
  // recursive case:
  // return the recursive call, passing in the string with the first letter sliced off, and the result object
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // base case:
  // if the list array is empty, return it
  if (!list.length) {
    return list;
  }
  // recursive case:
  // if the first item in the list array is equal to the second item, return the recursive call passing in the list array, with its first
  // item removed
  if (list[0] === list[1]) {
    return compress(list.slice(1));
  }
  // recursive case:
  else {
    // otherwise, using array literal syntax, add the first element of the list array, and concatenate it to the recursive call, passing in
    // the list with the first element sliced off
    return [list[0]].concat(compress(list.slice(1)));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // base case:
  // if the array is empty, return it
  if (!array.length) {
    return array;
  }
  // recursive case:
  // if the first and second item in the array are both equal to 0, return the recursive call, passing in the array with the first element
  // sliced off
  if (array[0] === 0 && array[1] === 0) {
    return minimizeZeroes(array.slice(1));
  }
  // recursive case:
  else {
    // otherwise, using array literal syntax, add the first element of the array, and concatenate it to the recursive call, passing in
    // the array with the first element sliced off
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // base case:
  // if the array is empty, return it
  if (!array.length) {
    return array;
  }
  // recursive case:
  // if the length of the array is an odd number, return a ternary operator
  if (array.length % 2 !== 0) {
    return [array[0] > 0 ? -1 * array[0] : array[0]].concat(alternateSign(array.slice(1)));
  }
  // recursive case:
  else {
    return [array[0] < 0 ? -1 * array[0] : array[0]].concat(alternateSign(array.slice(1)));
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // base case:
  // if the string is empty, return it
  if (!str.length) {
    return str;
  }
  // create a regex expression that will test if the character of the current recursive call is a number or not
  var reg = /\d/g;
  // recursive case:
  // if the first (current) character of the string matches the number regex, run a switch statement
  if (str.charAt(0).match(reg)) {
    // the switch statement will see what number it matched, and then return the appropriate word concatenated to a recursive call,
    // passing in the string, with the first character sliced off
    switch (str.charAt(0)) {
      case '1':
        return "one" + numToText(str.slice(1))
        break;
      case '2':
        return "two" + numToText(str.slice(1));
        break;
      case '3':
        return "three" + numToText(str.slice(1));
        break;
      case '4':
        return "four" + numToText(str.slice(1));
        break;
      case '5':
        return "five" + numToText(str.slice(1));
        break;
      case '6':
        return "six" + numToText(str.slice(1));
        break;
      case '7':
        return "seven" + numToText(str.slice(1));
        break;
      case '8':
        return "eight" + numToText(str.slice(1));
        break;
      case '9':
        return "nine" + numToText(str.slice(1));
        break;
    }
  }
  // recursive case:
  else {
    // if the current character is not a number, then concatenate it to a recursive call, passing in the string, with the first
    // character sliced off
    // return this
    return str.charAt(0).concat(numToText(str.slice(1)));
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
