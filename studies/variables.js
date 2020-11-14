/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use one of three keywords: var, let, or const. The keyword you choose is
 * then followed by a name (id or alias) to identify our variable. Each of the three keywords behave
 * distinctly from one another, when used to declare/initialize variables.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment). When a variable
 * is only declared, and not initialized, one of the three keywords (var, let or const) is typed,
 * followed by its unique name, used to identify the variable. A variable is initialized using the
 * same process as when one is declared, along with two additional steps. Following the variable's
 * name, an 'equal-to' operator, and a value is assigned. In other words, declaring a variable
 * is simply saving the variable in memory, whereas initializing a variable means to create a place
 * in the computer's memory for it, and giving it a value.
 * 
 * 3. Hoisting is the process of variable and function declarations being saved in memory before
 * the code block is actually run. It is done automatically by the engine during the compiling
 * phase. By creating spaces in memory for all variable and function declaration before running
 * the rest of the code, both types of declarations are available for use before they are
 * declared.
 **/

// 1. declaration //
var myName;
let youName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

/*
 * When the keyword 'const' is used, the variable must be initialized right away, and cannot just be declared.
 */
const theirNames = ['Tessa', 'Cookie', 'Sancho'];


// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

/*
 * Const variables cannot be reassigned after being initialized.
 */
// theirNames = "They're nameless";
// console.log(theirNames); // An error would be thrown

// NOTE: We can assign and re-assign anything to a variable //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// 4. Hoisting //
kitty = "Snowball";

catLog(kitty);

function catLog(cat) {
    console.log(cat);
}

var kitty;

// "Snowball" will be printed to the console

/*
 * Even though the 'kitty' variable is not declared unto the end of the code block, 
 * the variable's value is still printed to the console, thanks to hoisting.
 */
