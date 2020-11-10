/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    // loop through the animals array //
    for (let i = 0; i < animals.length; i++) {
        // set an if statement to check if there is an animal object with a name that equals the passed in name //
        if (animals[i].name === name) {
            // return the animal object if it finds a match //
            return animals[i];
        }
    }
    // return null if it doesnt find a match //
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    // loop through the animals array //
    for (let i = 0; i < animals.length; i++) {
        // set an if statement to check if there is an animal object with a name that equals the passed in name //
        if (animals[i].name === name) {
            // if they are equal, set that animal object equal to the passed in replacement object //
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    // loop through the animals array //
    for (let i = 0; i < animals.length; i++) {
        // set an if statement to check if there is an animal object with a name that equals the passed in name //
        if (animals[i].name === name) {
            // if the names are equal, remove that animal object //
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    // loop through the animals array //
    for (let i = 0; i < animals.length; i++) {
        // set an if statement to check if there is an animal object with a name that equals the passed in name //
        if (animals[i].name === animal.name) {
            // if it does, break out of the function by returning the animals array, unchanged //
            return animals;
        }
    }
    // if the name is unique, use an if statement to see if the animal object has a name and species with lengths greater than 0 // 
    if (animal.name.length > 0 && animal.species.length > 0) {
        // if both of these conditions pass, push the new animal object into the animals array //
        animals.push(animal);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
