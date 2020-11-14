/**
 * FUNCTIONS:
 * 
 * 0. A function is an integral part of the core foundation of the Javascript language.
 * Functions are named variables which contain code blocks. The code contained inside
 * of a function acts as a set of instructions or steps to take. Functions are used
 * to perform actions and/or calculates a value. Functions can optionally return
 * values, but this is not necessary for its *functionality*(<<Lol). After a function
 * is created, it can be used, or called, by typing the function's name, followed
 * by a pair of parentheses.
 * 
 * 1. To create a function, the keyword "function" is used, followed by a chosen name
 * which will be used to put it into action. Following the name, a pair of parentheses
 * whithin which optional parameters can be included. Lastly a pair of curly braces 
 * containing the instructional code block. The syntax is as follows:
 * 
 * function <function-name> (<parameter1>, <parameter2>) {
 *    <code-to-run>
 *      <optional-return-statement>
 *  }
 * 
 * Functions can also be assigned to, and used as variables. To do this simply use a
 * variable declaration keyword (var, let or const), and a name for the variable. Then
 * set it equal to the keyword function, followed by parentheses with optional parameters,
 * and a block of code surrounded by curly braces.
 * 
 * 2. In order to use variables which are declared and initialized on the global scope
 * and outside of the function scope, parameters must be included when the function
 * is created. When the function is called, if the function declaration contains parameters
 * the variables passed in are called arguments. After the function's name, the arguments
 * are housed within the parentheses, separated by commas. The syntax of a function call
 * is as follows:
 * 
 * <function-name>(<argument1>, <argument2>);
 * 
 * 3. Closures are when a nested, or child, function has access to the variables created
 * in it's parent function, even though the parent function does not have access to any
 * variable created inside the child function.
 */

// 1. Parameters/Arguments //
function exampleFunction(param1, param2) {
    console.log(param1 + param2);
}

// in this example, 5 and 10 are the two arguments
exampleFunction(5, 10); // prints => 15

// 2. Named and Anonymous Functions //
function namedFunc() {
    console.log("This is a named function");
}
namedFunc(); // prints => "This is a named function"

var anonFunc = function(name) { console.log("Hi, my name is " + name); };
var anonCall = anonFunc("Christopher");
console.log(anonCall); // prints => "Hi, my name is Christopher"

// 3. Closures //
function outerFunc(a) {
    let b = a;
    return function(c) {
        return b + c;
    };
}

let innerFunc = outerFunc(4);
console.log(innerFunc(6)); // prints => 10
