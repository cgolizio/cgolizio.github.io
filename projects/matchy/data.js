/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal.name = 'Cookie';
animal["noises"] = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "ruff";
noises.push("woof");
noises.unshift("grrr");
noises[noises.length] = "bark";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('whine');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *          You can use either bracket notation, or dot notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *          Using dot notation, you can access different elements in an array based on the element's index.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var octopus = { species: 'octopus', name: '8-Ball', noises: ['splash', 'bubble'] };
var lion = { species: 'lion', name: "Leo", noises: ['growl', 'purr'] };
animals.push(octopus, lion);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I chose to make the friends collection an array, because the friends list only needs to show the name of the animals friends.
// In other words, since only a single piece of data (string) is needed for each element in the friends list, i think an array would be the best way to demonstrate this.
var friends = [];

function getRandom() {
    return Math.floor(Math.random() * animals.length);
}

friends.push(animals[getRandom()].name);
console.log(friends);

animals[getRandom(animals)]['friends'] = friends;

console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal || null;
    module.exports.noises = noises || null;
    module.exports.animals = animals || null;
    module.exports.friends = friends || null;
    module.exports.getRandom = getRandom || null;
}
