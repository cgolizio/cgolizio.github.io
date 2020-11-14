/**
 * STRING MANIPULATION:
 * 
 * 0. Javascript has multiple build-in methods and properties which can be used to manipulate
 * strings. Additionally, certain operators can be used with strings. Similar to arrays,
 * each character of a string, including spaces, can be accessed via a numbered index.
 * 
 * 1. When chained onto a variable name representing a string value, methods and properties
 * can be used with that string. There are many that exist, but a few of the more used
 * ones include .charAt, .length, .toUpperCase, .toLowerCase, .substr, .slice, .split,
 * and many more.
 * 
 * 2. Strings can be concatenated, or connected, and compared with operators. Specifically
 * the addition operator, greater-than, less-than, greater-than or equal to, and less-
 * than or equal to operators are used in congruence with strings.
 */

// 1. Methods and Properties //
var string = "this is string";
console.log(string.length); // prints => 14, because there are 14 characters in string

console.log(string.toUpperCase()); // prints => THIS IS STRING

/*
 * The .split method turns the string into an array, split apart at whatever limit is included
 * between the parentheses, while the .join method changes the array items back into a string.
 */
var noSpaces = string.split(' ').join('');
var stringArray = noSpaces.split('');
console.log(stringArray); // prints => ['t', 'h', 'i', 's', 'i', 's', 's', 't', 'r', 'i', 'n', 'g']

// 2. Operators //
var stringCont = " with more string";
var stringTotal = string + stringCont;
console.log(stringTotal); // prints => "this is string with more string"

/*
 * When comparing strings with operators, it looks at the character code of each letter. Character
 * codes are numbers that assist the engine in identifying each letter and number. In the example
 * below, since "a" comes before "b" in the alphabet, "a" has a lower number character code, and is
 * therefore considered to be 'less-than' "b".
 */
var str1 = "a";
var str2 = "b";
console.log(str1 > str2); // prints => false
