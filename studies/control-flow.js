/**
 * CONTROL FLOW:
 * 
 * 0. Control flow refers to the order in which lines of code within a code block.
 * The Javascript interpreter will execute code from top to bottom, unless it
 * comes accross a conditional statement. Conditional statements allow different
 * lines of code to be executed depending on what condition passes. There are 4
 * main types of conditional statements, though 3 of them are very similar. These
 * include 'if' statements, 'if-else' statements, 'else' statements and finally,
 * 'switch' statements.
 * 
 * 1. If, if-else, and else statements are all nearly the same thing, the difference
 * being that if statements are a shorter version of the other two, with fewer
 * conditions to test. The three of these statements contain lines of code to be
 * tested by the interpreter. These lines of code are the conditions. When a condition
 * passes, the code attatched to it is run, and the remaining conditions are not
 * even read. In other words after a condition passes, and code is run, the computer
 * leaves the conditional statement and continues on. Their syntax is as follows:
 * 
 * if(<condition-1>){
 *     <code-to-run-if-true>
 * }else if(<condition-2>){
 *     <code-to-run-if-true>
 * }else{
 *     <code-to-run-if-true>
 * }
 * 
 * 2. Switch statements perform similarly as if/if-else/else statements, but are
 * often used when there are many conditions to test against. They include an expression,
 * various 'cases', and code to run depending on which case matches the expression.
 * Each case is separated by the word 'break' to tell the interpreter that the specific
 * case is finished. Switch statement syntax is as follows:
 * 
 * switch (<expression>){
 * 
 * case <value-1>:
 * <code-to-run-if-case-matches-expression>;
 * break;
 * case <value-2>:
 * <code-to-run-if-case-matches-expression>;
 * break;
 * case <value-3>:
 * <code-to-run-if-case-matches-expression>;
 * break;
 * default:
 * <code-to-run-if-none-of-the-cases-match-expression>;
 * break;
 * 
 * }
 */

// 1. If/If-Else/Else Statements //
var initials = "CMG";

if (initials[0] === 'M') {
    console.log('name begins with M');
}
else if (initials[0] === 'G') {
    console.log('name begins with G');
}
else if (initials[0] === 'C') {
    console.log('name begins with C');
}
else {
    console.log('name has no letters');
}

// prints => 'name begins with C'

// 2. Switch Statement //
var favFruit = 'pineapples';
var message = 'My favorite fruit must be ';

switch (favFruit) {
    case 'grapes':
        console.log(message + 'grapes');
        break;
    case 'apples':
        console.log(message + 'apples');
        break;
    case 'pears':
        console.log(message + 'pears');
        break;
    case 'bananas':
        console.log(message + 'bananas');
        break;
    case 'pineapples':
        console.log(message + 'pineapples');
        break;
    case 'satsumas':
        console.log(message + 'satsumas');
        break;
    default: // The default statement will only run if none of the cases match the expression.
        console.log('ew, fruit');
        break;
}

/*
 * In the example above, a string of "My favorite fruit must be pineapples" is printed
 * to the console. Since the 5th case matches the expression, the 6th case and the
 * default statement will not be executed or checked by the interpreter.
 */
