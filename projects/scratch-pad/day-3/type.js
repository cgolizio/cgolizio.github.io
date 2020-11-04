// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // use the Array.isArray() method to determine if the input value is an array //
    // if it is, return true; if not return false //
    return Array.isArray(value) ? true : false;



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // check if the typeof value is an object, and make sure it is not null, an array, or a date //
    // return true if all of this passes, and fakse if not //
    if (value !== null && !Array.isArray(value) && value instanceof Date === false && typeof value === 'object') {
        return true;
    }
    else {
        return false;
    }



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // check if the typeof value is an object, and make sure it is not null or a date //
    // return true if all of this passes, and false if not //
    if (value !== null && value instanceof Date === false && typeof value === 'object') {
        return true;
    }
    else {
        return false;
    }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // check if value is an object //
    if (value !== null && !Array.isArray(value) && value instanceof Date === false && typeof value === 'object') {
        // return a string of object if so //
        return "object";
    }
    // check if  value is null
    else if (value === null) {
        // return a string of null if so //
        return "null";
    }
    // check if value is a date //
    else if (value instanceof Date) {
        // return a string of date if so //
        return "date";
    }
    // check if value is an array //
    else if (Array.isArray(value)) {
        // return a string of array if so //
        return "array";
    }
    else {
        // if value is none of the previous listed data types, use the typeof method to return a string of value's data type //
        return typeof value;
    }



    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
