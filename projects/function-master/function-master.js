//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // input is an object
    // output should be an array
    // edge cases: none

    // create the array
    var arr = [];
    // loop through the object
    for (var key in object) {
        // put values into array
        arr.push(object[key]);
    }
    // return the array
    return arr;


    // this also works:
    // return Object.keys(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // input is an object
    // should return object's keys as one long string
    // edge case: each key separated by a space

    // create a variable equal to the Object.keys method (to put all the object's keys into an array)
    // which then joins each item in the array, into a string
    var objKeysStr = Object.keys(object).join(' ');
    // return the string
    return objKeysStr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // input is an object
    // should return object's values as one long string
    // edge case: each value separated by a space, should only include the values that are already a string

    // create two arrays; the first will hold all of the object's values, while the second will just contain the object's values that are strings
    var tempArr = [];
    var resultArr = [];
    // set the first array equal the the object's values using the Object.values method
    tempArr = Object.values(object);
    // loop through the values array
    for (let i = 0; i < tempArr.length; i++) {
        // if the type of item is a string, push it into the second array
        if (typeof tempArr[i] === 'string') {
            resultArr.push(tempArr[i]);
        }
    }
    // return the second array joined with a space
    return resultArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // input is either an object or an array
    // should return a string

    // use an if statement to check if the typeof the collection is an object
    if (typeof collection === 'object') {
        // nest another if statement that checks if it is an Array
        // this part will only run if the typeof is an object
        if (Array.isArray(collection)) {
            // if so return a string of 'array'
            return 'array';
        }
        else {
            // if not return a string of 'object'
            return 'object';
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // input is a string
    // should return a string with the first letter capitalized

    // this can be done using the charAt, toUpperCase, and slice methods
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // input is a string
    // should return a string with the first letter of every word capitalized

    // create a variable equal to the string split at each space, inside an array
    var strArr = string.split(' ');
    // loop through the array
    for (let i = 0; i < strArr.length; i++) {
        // set each value of the array equal to the values first character forced into uppercase, and concatenated with the rest of the value's characters
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1);
    }
    // return the string array, joined with a space
    return strArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // input is an object
    // should return a string
    // edge case: the object will have a 'name' property; the first letter of the name must be capitalized 

    // set the object's name property equal to itself with the first letter capitalized
    object.name = object.name[0].toUpperCase() + object.name.substr(1);
    // return the message
    return `Welcome ${object.name}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // input is an object
    // should return a string
    // edge case: object will have name and species properties; both values must be capitalized in the final string

    // set the object's name property equal to itself with the first letter capitalized
    object.name = object.name[0].toUpperCase() + object.name.substr(1);
    // set the object's species property equal to itself with the first letter capitalized
    object.species = object.species[0].toUpperCase() + object.species.substr(1);
    // return the message
    return `${object.name} is a ${object.species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // input is an object
    // should return a string
    // edge case: object may or may not have a 'noises' property

    // create an array to hold the noises array items
    var noisesArr = [];
    // check if the object even has a noises property
    if (object.hasOwnProperty('noises')) {
        // nested if statement to check if the noises array is populated or not
        // will only run if the noises property exists
        if (object.noises.length > 0) {
            // if the noises array is populated, then return it as a joined string
            return object.noises.join(' ')
        }
        else {
            // if the noises array is empty, return 'there are no noises'
            return 'there are no noises'
        }
    }
    else {
        // if the object does not even have a noises property, return 'there are no noises'
        return 'there are no noises'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // takes a string of words and a single word
    // should return a boolean

    // create an array to hold each word in the string
    // split the string into the array
    var strArr = string.split(' ')
    // create an if statement to search through the string array using the includes method
    if (strArr.includes(word)) {
        // if the array includes the word, return true
        return true;
    }
    else {
        // otherwise return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    // takes a string of a name and an object as inputs
    // should return the object, with an updated property

    // push the name into the array attatched to the key of friends in the object
    object['friends'].push(name);
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // takes a string of a name and an object as inputs
    // should return a boolean

    // check if the object has a friends property
    if (!object.hasOwnProperty('friends')) {
        // if it does not, return false
        return false;
    }
    else {
        // if it does have a friends key, check if the object's friends key contains the passed in name
        return object.friends.includes(name);
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // takes a name and an array of objects
    // should return an array

    // create an array to hold the names of the non-friends
    var notAFriend = [];
    // iterate through the array of objects
    for (let i = 0; i < array.length; i++) {
        if (array[i].name !== name) {
            if (array[i].friends.includes(name)) {
                undefined;
            }
            else {
                notAFriend.push(array[i].name)
            }
        }
    }
    return notAFriend;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // inputs are an object, a key, and a value
    // should update the object's key property with the new value
    // edge case: if the object does not have that key, create it

    // set the object at that key equal to the passed in value
    object[key] = value;
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // takes an array and an object as inputs
    // should delete any of the object's properties which are found inside the array

    // loop through the array
    for (let i = 0; i < array.length; i++) {
        // check if the object has a property equal to any of the items in the array
        if (object.hasOwnProperty(array[i])) {
            // delete the objects properties that are found in the array
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // input is an array
    // should return the array, with all of the duplicates removed

    // create a new array, set equal to an array literal
    // inside the array literal use the spread operator, and the Set function
    // Set will create a new set of items based off the old array's items, and remove all of the repeated ones
    var result = [...new Set(array)]
    // return the new array
    return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
