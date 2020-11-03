// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // create a variable set to the value of the starting point //
    var num = 1;
    // use a while loop to set the stopping point //
    while (num < 101) {
        // if the number at the current iteration is a multiple of 3 and 5, print FizzBuzz //
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        }
        // if the current iteration is a multiple of just 3, print Fizz //
        else if (num % 3 === 0) {
            console.log("Fizz");
        }
        // if the current iteration is a multiple of just 5, print Buzz //
        else if (num % 5 === 0) {
            console.log("Buzz");
        }
        else {
            // otherwise print the number //
            console.log(num);
        }
        // the number should go up by 1 after each iteration, until the while loop reaches its stopping point //
        num++;
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
