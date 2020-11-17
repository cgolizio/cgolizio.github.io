// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
 * START OF OUR LIBRARY!
 * Implement each function below it's instructions
 */

/** _.identity
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Returns <value> unchanged
 * Examples:
 *   _.identity(5) === 5
 *   _.identity({a: "b"}) === {a: "b"}
 */
_.identity = function(value) {
    // input: any value
    // output: returns the value unchanged
    // constraints: n/a
    // edge cases: n/a
    return value;
}


/** _.typeOf
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Return the type of <value> as a string
 *       Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * Examples:
 * _.typeOf(134) -> "number"
 * _.typeOf("javascript") -> "string"
 * _.typeOf([1,2,3]) -> "array"
 */
_.typeOf = function(value) {
    // input: value of any datatype
    // output: returns a string of the value's datatype
    // constraints:
    // edge cases:
    if (Array.isArray(value)) {
        return "array";
    }
    else if (value === null) {
        return "null";
    }
    else if (typeof value === "number") {
        return "number";
    }
    else if (typeof value === "function") {
        return "function";
    }
    else if (value === undefined) {
        return "undefined";
    }
    else if (typeof value === "string") {
        return "string";
    }
    else if (value === true || value === false) {
        return "boolean";
    }
    else {
        return "object";
    }
}


/** _.first
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the first element in <array>.
 *   3) Otherwise, return the first <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */
_.first = function(array, num) {
    // input: an array, and a number
    // output: return the first amount of items in the array, the amount will be the passed in number
    // constraints: if array is not an array, return []. if the number is not given, or NaN return the first element in array
    // edge cases: if num is negative return an []. If num > array.length, return the whole array.
    if (!Array.isArray(array) || num < 0) {
        return [];
    }
    if (!num || isNaN(num)) {
        return array[0];
    }
    if (num > array.length) {
        return array;
    }
    return array.slice(0, num);
}


/** _.last
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the last element in <array>.
 *   3) Otherwise, return the last <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */
_.last = function(array, num) {
    // input: an array and a number
    // output: return the number of elements within the array starting from the end and working backwards
    // constraints: if array isn't an array, return [], if the number is not given or NaN, return the last element in the array
    // edge cases: if num is greater than array.length, return the whole array. If num is negative, return [].
    if (!Array.isArray(array) || num < 0) {
        return [];
    }
    if (!num || isNaN(num)) {
        return array[array.length - 1];
    }
    if (num > array.length) {
        return array;
    }
    var reversed = array.reverse();
    return reversed.slice(0, num).reverse();
}


/** _.indexOf
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return the index of <array> that is the first occurrance of <value>
 *   2) Return -1 if <value> is not in <array>
 *   3) Do not use [].indexOf()!
 * Edge Cases:
 *   1) What if <array> has multiple occurances of val?
 *   2) What if <val> isn't in <array>?
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */
_.indexOf = function(array, value) {
    // input: an array and a value
    // output: returns a number representing the index of the first occurence of value within the array
    // constraints: don't use .indexOf()
    // edge cases: if array is not an array, return -1. Only return the index of the first occurence of value
    if (!Array.isArray(array) || !array.includes(value)) {
        return -1;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
}


/** _.contains
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return true if <array> contains <value>
 *   2) Return false otherwise
 *   3) You must use the ternary operator in your implementation.
 * Edge Cases:
 *   1) did you use === ?
 *   2) what if no <value> is given?
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */
_.contains = function(array, value) {
    // input: an array, and a value
    // output: return a boolean based on whether the array contains the value
    // constraints: must use a ternary operator
    // edge cases: n/a
    return array.includes(value) ? true : false;
}


/** _.each
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) if <collection> is an array, call <function> once for each element
 *      with the arguments:
 *         the element, it's index, <collection>
 *   2) if <collection> is an object, call <function> once for each property
 *      with the arguments:
 *         the property's value, it's key, <collection>
 * Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */
_.each = function(collection, action) {
    // input: a collection and a function
    // output: does not return anything
    // constraints:
    // edge cases:
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}


/** _.unique
 * Arguments:
 *   1) An array
 * Objectives:
 *   1) Return a new array of all elements from <array> with duplicates removed
 *   2) Use _.indexOf() from above
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */
_.unique = function(array) {
    // input: an array
    // output: an array with all the elements of the first array, but without any duplicate elements
    // constraints: use .indexOf from above
    // edge cases: n/a
    var noDuplicates = [];
    for (let i = 0; i < array.length; i++) {
        if (_.indexOf(noDuplicates, array[i]) === -1) {
            noDuplicates.push(array[i]);
        }
    }
    return noDuplicates;

    // return [...new Set(array)]; << this works as well, but it does not use the _.indexOf() function which the question calls for
}


/** _.filter
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned true
 * Edge Cases:
 *   1) What if <function> returns something other than true or false?
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 * Extra Credit:
 *   use _.each in your implementation
 */
_.filter = function(array, func) {
    // input: an array and a function
    // output: a new array with the elements that resolve to true when passed through the function
    // constraints:
    // edge cases:
    var result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            result.push(array[i]);
        }
    }
    return result;
}


/** _.reject
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned false
 *   3) This is the logical inverse if _.filter()
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */
_.reject = function(array, func) {
    // input: an array and a function
    // output: a new array with the elements that resolve to false when passed through the function
    // constraints:
    // edge cases:
    var rejected = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            rejected.push(array[i]);
        }
    }
    return rejected;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
    // input: an array and a function
    // output: an array, with two sub-arrays inside
    // constraints:
    // edge cases: array must have two sub arrays inside; the first will contain truthy values, and the second will have falsey values
    var truthy = [];
    var falsey = [];
    var result = [];
    for (let i = 0; i < array.length; i++) {
        func(array[i]) === true ? truthy.push(array[i]) : falsey.push(array[i]);
    }
    result.push(truthy, falsey);
    return result;
}


/** _.map
 * Arguments:
 *   1) A collection
 *   2) a function
 * Objectives:
 *   1) call <function> for each element in <collection> passing the arguments:
 *        if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 *   2) save the return value of each <function> call in a new array
 *   3) return the new array
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */
_.map = function(collection, func) {
    // input: a collection and a function
    // output: a new array with the results of each item after they are passed through the function
    // constraints:
    // edge cases:
    var result = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection));
        }
    }
    else {
        for (var key in collection) {
            result.push(func(collection[key], key, collection));
        }
    }
    return result;
}


/** _.pluck
 * Arguments:
 *   1) An array of objects
 *   2) A property
 * Objectives:
 *   1) Return an array containing the value of <property> for every element in <array>
 *   2) You must use _.map() in your implementation.
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
_.pluck = function(arrOfObj, prop) {
    // input: An array filled with objects, and a property
    // output: an array containing the value of the passed in property/key for each object within the original array
    // constraints: must use _.map
    // edge cases:
    var result = [];
    _.map(arrOfObj, function(obj) {
        return result.push(obj[prop]);
    })
    return result;
}


/** _.every
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *      if <collection> is an array:
 *          current element, it's index, <collection>
 *      if <collection> is an object:
 *          current value, current key, <collection>
 *   2) If the return value of calling <function> for every element is true, return true
 *   3) If even one of them returns false, return false
 *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */
_.every = function(collection, func) {
    // input: a collection and a function
    // output: a boolean based on whether all the elements/values resolve to true or not when passed through the input function
    // constraints: 
    // edge cases: return true if the function is not provided, and if all the elements are truthy
    let result = true;
    if (!func) {
        for (let key in collection) {
            if (collection[key] === false) {
                result = false;
            }
        }
    }
    else {
        _.each(collection, function(item, i, collection) {
            if (func(item, i, collection) === false) {
                result = false;
            }
        })
    }
    return result;
}


/** _.some
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *       if <collection> is an array:
 *        current element, it's index, <collection>
 *       if <collection> is an object:
 *        current value, current key, <collection>
 *   2) If the return value of calling <function> is true for at least one element, return true
 *   3) If it is false for all elements, return false
 *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */
_.some = function(collection, func) {
    // input: a collection and a function
    // output: a boolean based on whether some the elements/values resolve to true or not when passed through the input function
    // constraints:
    // edge cases: return true if the function is not provided, and if at least one of the elements is truthy
    var result = false;
    if (!func) {
        for (let key in collection) {
            if (collection[key]) {
                result = true;
            }
        }
    }
    else {
        _.each(collection, function(item, i, collection) {
            if (func(item, i, collection)) {
                result = true;
            }
        })
    }
    return result;
}


/** _.reduce
 * Arguments:
 *   1) An array
 *   2) A function
 *   3) A seed
 * Objectives:
 *   1) Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *   2) Use the return value of <function> as the "previous result"
 *      for the next iteration
 *   3) On the very first iteration, use <seed> as the "previous result"
 *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *   5) After the last iteration, return the return value of the final <function> call
 * Edge Cases:
 *   1) What if <seed> is not given?
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */
_.reduce = function(array, func, seed) {
    // input: an array, a function and a seed
    // output: returns the return value of the final function call
    // constraints:
    // edge cases: if no seed is given, use the first element as the seed
    var prev = seed;
    if (seed === undefined) {
        prev = array[0];
        for (let i = 1; i < array.length; i++) {
            prev = func(prev, array[i], i);
        }
    }
    else {
        _.each(array, function(item, i, array) {
            prev = func(prev, array[i], i, array);
        })
    }
    return prev;
}


/** _.extend
 * Arguments:
 *   1) An Object
 *   2) An Object
 *   ...Possibly more objects
 * Objectives:
 *   1) Copy properties from <object 2> to <object 1>
 *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
 *   3) Return the update <object 1>
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */
_.extend = function(obj) {
    // input: multiple objects
    // output: the first object with updated properties
    // constraints:
    // edge cases:
    _.each(Array.from(arguments), function(item, i, collection) {
        Object.assign(obj, item);
    })
    return obj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
