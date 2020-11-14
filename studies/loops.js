/**
 * LOOPS:
 * 
 * 0. Loops are used to repeat an action until its stopping conditions are met.
 * Loops can also iterate through items within certain datatypes, such as strings,
 * arrays, and objects. There are 3 main types of loops: for loops, for-in loops,
 * and while loops.
 * 
 * 1. For loops have three parts: the starting condition, the stopping condition,
 * and the amount by which to increment. These three conditions are held within
 * a set of parentheses, followed by a pair of curly braces, within which lines
 * of code can be included. First, before the parentheses, the keyword "for" is
 * used. It is often used to iterate through array items, or string characters.
 * Its syntax is as follows:
 * 
 * for(<starting-condition>; <stopping-condition>; <increment-by>){
 *    <code-to-run>
 * }
 * 
 * 2. For-in loops are often used to iterate through the keys/values of objects.
 * They iterate through each property a specified number of times. The syntax
 * for 'for-in' loops is as follows:
 * 
 * for(var <key> in <object-name>){
 *     <code-to-run>
 * }
 * 
 * 3. While loops are given a condition, and continue iterating until that condition
 * is met. The condition will result in either true or false. As long as it resolves
 * to true, the loop will continue to run. Once it resolves to false, the loop will
 * cease. While loop syntax is as follows:
 * 
 * while(<condition>){
 *     <code-to-run>
 *     <iterate-by>
 * }
 * 
 */

// 1. For Loop //
var arr = ['dog', 'cat', 'bird', 'donkey'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // prints => 'dog' 'cat' 'bird' 'donkey'
}

for (let i = 2; i < arr.length; i++) {
    console.log(arr[i]); // prints => 'bird' 'donkey'
}


// 2. For-In Loop //
var obj = { one: 'blue', two: 'red', three: 'purple' };

for (var key in obj) {
    console.log(key); // prints => one two three

    console.log(obj[key]); // prints => 'blue' 'red' 'purple'
}


// 3. While Loop //
var num = 1;

while (num < 11) {
    console.log(num); // prints => 1 2 3 4 5 6 7 8 9 10
    num++
}
