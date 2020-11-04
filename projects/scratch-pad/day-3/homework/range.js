// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // create an array to house the range of numbers //
    var result = [];
    // use a conditional statement to determine if start is greater thban or less than end //
    if (start < end) {
        // use a while loop to loop through each number between the starting point, and the ending point + 1 //
        while (start < end + 1) {
            // push each number into the result array //
            result.push(start);
            // add 1 to start after each iteration //
            start++;
        }
    }
    else {
        // if start is greater than end, do the opposite of the above code //
        while (start > end - 1) {
            result.push(start);
            start--;
        }
    }
    // return the result array //
    return result;

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
