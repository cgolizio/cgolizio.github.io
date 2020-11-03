// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // loop through the array //
  for (let i = 0; i < array.length; i++) {
    // print the values of the array //
    console.log(array[i]);
  }



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // loop over the array in reverse //
  for (let i = array.length - 1; i >= 0; i--) {
    // print the arrays values to the console //
    console.log(array[i]);
  }



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create an empty array to hold the object's keys //
  let arr = [];
  // loop through the object with a for in loop //
  for (let key in object) {
    // push the keys into the array //
    arr.push(key);
  }
  // return the array //
  return arr;



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // loop over the object //
  for (let key in object) {
    // print the objects keys to the console //
    console.log(key);
  }



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create an empty array to hold the object's values //
  let arr = [];
  // loop through the object with a for in loop //
  for (let key in object) {
    // push the values into the array //
    arr.push(object[key]);
  }
  // return the array //
  return arr;



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // loop over the object //
  for (let key in object) {
    // print the object's values to the console //
    console.log(object[key]);
  }



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create an empty array to hold the object's keys //
  let arr = [];
  // loop through the object with a for in loop //
  for (let key in object) {
    // push the keys into the array //
    arr.push(key);
  }
  // return the array's length //
  return arr.length;



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create an empty array to hold the object's keys //
  let arr = [];
  // loop through the object with a for in loop //
  for (let key in object) {
    // push the values into the array //
    arr.push(object[key]);
  }
  // loop through the array in reverse //
  for (let i = arr.length - 1; i >= 0; i--) {
    // print the array's items to the console with the reversed for loop //
    console.log(arr[i]);
  }



  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
