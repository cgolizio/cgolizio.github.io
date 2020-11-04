// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a child function which takes one value as its parameter //
    return function(val) {
        // check if the value of the child function is greater than the base of the parent function //
        return val > base;
    }



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a child function which takes one value as its parameter //
    return function(val) {
        // check if the value of the child function is less than the base of the parent function //
        return val < base;
    }



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return a child function //
    return function(str) {
        // force the startsWith character and the passed in string into the same case //
        startsWith = startsWith.toLowerCase();
        str = str.toLowerCase();
        // check if the first letter of the string is strictly equal to the startsWith parameter //
        return str[0] === startsWith;
    }



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return a child function //
    return function(str) {
        // force the startsWith character and the passed in string into the same case //
        endsWith = endsWith.toLowerCase();
        // creart an array which is the input string, forced into lowercase, and then split into individual characters //
        let arr = str.toLowerCase().split('');
        // check if the last character of the array (which is the last character of the passed in string) is strictly equal to the endsWith character //
        return arr[arr.length - 1] === endsWith;
    }



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create an array to hold the modified values of the original array //
    var arrMod = [];
    // loop through each value of the original array //
    for (let i = 0; i < strings.length; i++) {
        // push the function called with each item in the original array into the newly created array //
        arrMod.push(modify(strings[i]));
    }
    // return the newly created array //
    return arrMod;



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // use the every() function passing in the test function to check each value inside the strings array passes the 'test' test //
    return strings.every(test);


    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;
}
