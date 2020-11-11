/**
 * DATA TYPES:
 * 0. The information (or data) that gets passed through and by a computer is handled differently, depending
 * on the type of data in question. Data types are broken into two main groups: primitive and complex.
 * Within each of these groups are multiple data types.
 * 
 * 1. Primitive data types include Booleans (true or false), strings, numbers, undefined, null, NaN, among a few others.
 * The main difference between primitive and complex data types is the way that they are stored and accessed
 * by the computer. Primitive data types are immutable which means they cannot be changed. They are also
 * copied by value, as opposed to copied by reference. This means that when a primitive data type is accessed,
 * the computer pulls the value directly from the place at which the variable is initialized, or the last point
 * that the value is changed.
 * 
 * 2. Booleans are simply true or false. They are mainly used within conditional statements. When using non-strict
 * comparison, true is equal to 1, and false is equal to 0.
 * 
 * 3. Strings are basically sentences, to be interpreted by you and the computer as a continuous line of text/numbers.
 * They are created by enclosing whatever text to be included in the string with quotation marks. Either single quotes
 * (' ') or double quotes (" ") can be used. Javascript has certain methods and properties to be used specifically with
 * strings. Some of these include .length, .split, .concat, and so on.
 * 
 * 4. Numbers are numerical data which can be positive or negative, and can also include decimals.
 * 
 * 5. Undefined is reserved for any variable which exists within the memory, but lacks a value.
 * 
 * 6. Null is used whenever a variable is intended to lack any value.
 * 
 * 7. NaN stands for "not a number". It is usually seen as the return value where the computer expects to return
 * a number, but recieves a different data type to return instead.
 * 
 * 8. Complex data type consists mainly of functions, objects and arrays. They are mutable, which means changeable in the
 * computer's memory. Complex data type variables are copied by reference, meaning a reference point is created
 * when the variable is initialized, and the computer refers to that point when it uses the piece of data.
 * 
 * 9. Arrays are collections of data. The data housed inside an array can be of any data type. Each item inside
 * of an array can be accessed using that items index. To count indices of an array, start at 0 and work your
 * way up by 1 for each element. Arrays have various methods and properties in Javascript, which are specifically
 * for this data type. Array syntax consists of two square brackets ([ ]), inside which are all of the items
 * it includes. Each item is separated by a comma.
 * 
 * 10. Objects are also collections, which can house data of any type. Like arrays, objects' data is easily
 * accessible, however they use a different method to do so. Each value in an object is assigned to its own key.
 * The keys are used to access the values. This is called key/value pairs. Objects' syntax consists of two
 * curly braces ({ }) which contain all the key value pairs. First the key is created followed by a colon (:) and
 * then the value. Each key/value pair is separated by a comma.
 * 
 * 11. Functions are reusable blocks of code, which perform an action, and sometimes (optionally) return a value.
 * Another option is to pass in pieces of information to the function. When creating the function, the placeholder
 * for these passed in values are called parameters. When the function is called, the passed in values are called
 * arguments. After creating a function, it must be called in order for it to run. Function syntax is as follows:
 * 
 * function <function-name> (<parameter1>, <parameter2>) {
 *    <code-to-run>
 *  };
 * 
 * To call a function, simply type the function's name, followed by a pair of parentheses. If arguments are needed
 * to be passed into the function, include them within the parentheses, ie: <function-name> (<argument1>, <argument2>);
 * 
 * 12. Infinity and -Infinity are mathematical representations of the concepts of infinity and its inverse.
 */

// 1. Booleans //
console.log(1 + 2 === 3); // prints => true
console.log(10 + 5 === 20); // prints => false

// 2. String //
var stringExample = "This is an example of a string!";
console.log(stringExample.length); // prints => 31, because there are 31 characters within the string, including spaces.

// 3. Number //
var hundred = 10 * 10;
console.log(hundred); // prints => 100

// 4. Undefined //
var testing;
console.log(testing); // prints => undefined, since the variable testing is created, but not initialized to any value yet.

// 5. Null //
testing = null;
console.log(testing); // prints => null, since it is now the value of testing.

// 6. NaN //
console.log(Math.sqrt(-25)); // prints => NaN, since the square root of a negative number is not a number.

// 7. Array //
var exampleArray = [25, 50, 75];
console.log(exampleArray[2]); // prints => 75, because 75 is the 2nd index within the array (starting at 0).

exampleArray[3] = 100;
console.log(exampleArray); // prints => [25, 50, 75, 100], 100 is added to the end of the array at the 3rd index.

// 8. Object //
var myObject = { keyOne: exampleArray, keyTwo: [1, 2, 3, 4] };
console.log(myObject.keyTwo); // prints => [1, 2, 3, 4], since that is the value associated with keyTwo.

// 9. Function //
function createArr(one, two, three) {
    let arr = [];
    arr.push(one, two, three);
    console.log(arr);
}

createArr(30, 60, 90); // prints => [30, 60, 90]

// 10. Infinity and -Infinity //
console.log(1 / Infinity); // prints => 0
console.log(1 / 0); // prints => Infinity
