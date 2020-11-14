/**
 * OPERATORS:
 * 
 * 1. Operators perform action on values. There are 6 main groups, or types, of operators.
 * These include assignment, arithmetic, comparison, logical, unary and ternary operators.
 * The values being used with the operator are called operands. Javascript can run unary,
 * binary, and ternary operations. These three terms refer to the amount of operands
 * that are included in the operation (unary = 1 operand, binary = 2 operands, and
 * ternary = 3 operands).
 * 
 * 2. Assignment operators assign a value of its 'right-side' operand to it's 'left-side'
 * operand. In it's most basic form, an assignment operator consists of an equals sign (=),
 * sandwiched between two operands. Assignment operators can also chain an aritmetic operator
 * to itslef. In other words, a calculation can be performed and assigned to a variable with
 * just one single action. This is done using the arithmetic operator followed immediately
 * by an equals sign (+=, -=, *=, /=, etc.);
 * 
 * 3. Arithmetic operators perform mathematical calculations on two operands. These include
 * addition (+), subtraction (-), multiplication (*), division (/), remainder (%), and 
 * the exponentiation operator (**).
 * 
 * 4. Comparison operators compare the values of two operands against one another. This type of
 * operator resolves to a Boolean (true or false). Included in this group are greater than (>),
 * less than (<), greater than or equal to (>=), and less than or equal to (<=).
 * 
 * 5. Logical operators consist of the 'or' operator (||), the 'and' operator (&&), and the 'not' or
 * 'bang' operator (!). The 'or' and 'and' operators are included between two operands. They
 * are often used inside the condition portion of if/if-else/else statements. The 'or' operator
 * makes it so that either one of the two operands are true, then it resolves to true.
 * The 'and' operator will only allow the conditional statment to resolve to true if both
 * conditions pass. The 'bang' operator is placed before a statement, and it reverses
 * whatever the statement would naturally resolve to.
 * 
 * 6. Unary operators perform their actions on only one operand. These include the increment (++)
 * and decrement (--) operators, which respectively add or subtract 1 to their operand. These
 * are used in for loops.
 * 
 * 7. The ternary operator is a form of conditional statement. Its syntax is as follows:
 * 
 *  <condition> ? <if-true-run-this> : <if-false-run-this>
 */

// 1. Assignment Operator //
var assigned = 58;
console.log(assigned); // prints => 58

// 2. Arithmetic Operator //
var math = 11;
math += assigned;
console.log(math); // prints => 69

var asWell = "strings too!";
var strs = "The addition operator can be used with ";
strs += asWell;
console.log(strs); // prints => "The addition operator can be used with strings too!"

// 3. Comparison Operator //
console.log(25 > 50); // prints => false
console.log(25 < 50); // prints => true
console.log(75 >= 76); // prints => false
console.log(75 <= 76); // prints => true
console.log(100 >= 100); // prints => true
console.log(100 <= 100); // prints => true


// 4. Logical Operator //
var num = 15;
if (num < 10 || (num * 2) === 30) {
    console.log('Yes.');
}
else {
    console.log('nuh uh');
} // prints => "Yes."

if (num / 2 > 8 && num % 5 === 0) {
    console.log('Yes.');
}
else {
    console.log('nuh uh');
} // prints => "nuh uh"


// 5. Unary Operator //
var ex = 57;
ex++;
console.log(ex); // prints => 58


// 6. Ternary Operator //
var myName = "Christopher";
myName[0] === "C" ? console.log("Your name starts with that one!") : console.log("That aint yo first letter!");
// prints => "Your name starts with that one!"
