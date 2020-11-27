// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-cgolizio');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cgolizio.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // should find the number of male customers
    // constraint: must use filter
    let maleCustomers = _.filter(array, function(customerObj) {
        // filter out the customerObj with the gender value of 'male'
        return customerObj.gender === "male";
        // add .length to the end of the filter function to get the number of male customerObj's
    }).length;
    return maleCustomers;
};



var femaleCount = function(array) {
    // should find the number of female customers using reduce
    let femaleCustomers = _.reduce(array, (femaleCount, customerObj) => {
        // if the gender value of the customer object is 'female' then add 1 to the female count
        customerObj.gender === "female" ? femaleCount++ : femaleCount;
        // return the female count
        return femaleCount;
        // an initial seed of 0 will tell the interpreter where to start counting from, when it reaches
        // a female customer
    }, 0);
    return femaleCustomers;
};



var oldestCustomer = function(array) {
    // should find the oldest customer
    // use map to create an array of all the customers' ages
    var ages = _.map(array, function(customerObj) {
        return customerObj.age;
        // chain on the sort method to put the ages in order of greatest to least
    }).sort((a, b) => b - a);
    // use the filter function to filter out the customer object that has the first item in the
    // sorted array of ages as their age value
    var oldest = _.filter(array, customerObj => {
        return customerObj.age === ages[0];
        // because of the way the filter function works, the customerObj that matches the criteria
        // will be held inside an array, the customerObj will be its only element
        // chain on the pop method to remove the customerObj from the outer array
    }).pop();
    // return the customerObj's name value using bracket notation
    return oldest['name'];
};



var youngestCustomer = function(array) {
    // should find the youngest customer
    // use map to create an array of all the customers' ages
    var ages = _.map(array, function(customerObj) {
        return customerObj.age;
        // chain on the sort method to put the ages in order of least to greatest
    }).sort((a, b) => a - b);
    // use the filter function to filter out the customer object that has the first item in the
    // sorted array of ages as their age value
    var youngest = _.filter(array, function(customerObj) {
        return customerObj.age === ages[0];
        // chain on the pop method to remove the customerObj from the outer array
    }).pop();
    // return the customerObj's name value using bracket notation
    return youngest['name'];
};



var averageBalance = function(array) {
    // should find the average of customers' balances
    // MY MORE CONCISE SOLUTION: //

    // use map to create an array of all the customers balances
    // the balances are strings with a dollar sign and comma included
    // use the slice method to remove the dollar sign
    // use the replace method to get rid of the comma
    // put the entire return statement in the Number function as its argument; this will convert the string to a number
    var balanceArr = _.map(array, customerObj => Number(customerObj.balance.slice(1).replace(',', '')));
    // use reduce to find the average
    return _.reduce(balanceArr, (currentBalance, nextBalance) => (currentBalance + nextBalance)) / balanceArr.length;
};

/*
    
    FIRST WAY I SOLVED THIS:
    
var averageBalances = function(array) {
    var balances = array.map(function(customerObj) {
        return customerObj.balance;
    })
    var balanceNums = balances.map(function(balance) {
        return Number(balance.slice(1).replace(',', ''));
    });
    var added = balanceNums.reduce(function(a, b) {
        return a + b;
    });
    return (added / balanceNums.length);
};
    */


var firstLetterCount = function(array, letter) {
    // takes the customers array and a single letter
    // should return the number of customers whose first name begins with the passed in letter value
    // first put the letter into uppercase in case it isn't already. This will help us make sure the letter and the first letter
    // of the customers' names are being compared equally
    letter = letter.toUpperCase();
    // filter out the customerObjs' names with the zeroeth index of their name equal to the passed in letter
    // chain on the .length property to return the number of customers with that first letter of their name
    return _.filter(array, customerObj => customerObj.name[0] === letter).length;
};



var friendFirstLetterCount = function(array, customer, letter) {
    // takes the customers array, a specific customer's name, and a letter
    // should find the number of friends of the specific customer whose names start with the passed in letter
    // first put the letter into uppercase in case it isn't already. This will help us make sure the letter and the first letter
    // of the customers' names are being compared equally
    letter = letter.toUpperCase();
    // filter out the customer with the name value equal to the passed in name
    // the filter function will return an array with one item: the customer object with the correct name
    // chain on the pop method to remove the customer object from the outer array
    let specificCustomer = _.filter(array, customerObj => customerObj.name === customer).pop();
    // create a variable equal to the customer object, referencing that customer's friends value
    // this will ultimately be an array filled with objects; each object represents one of the customer's friends
    var specificCustomerFriends = specificCustomer.friends;
    // filter out the friends if the first letter of their name is equal to the passed in letter
    // return the length of this final filtered array
    return _.filter(specificCustomerFriends, friend => friend.name[0] === letter).length;
};



var friendsCount = function(array, customerName) {
    // should find all the names of customers that have a given name in their friends list
    // create a variable set equal to a filter function being called on the customers array
    var friendsWith = _.filter(array, customerObj => {
        // create a for loop with the stopping point being the end of the customer objects 'friends' array
        for (let i = 0; i < customerObj.friends.length; i++) {
            // if the name of the customer object's friends at the current iteration is equal to the passed in name, return true
            if (customerObj.friends[i].name === customerName) {
                return true;
            }
        }
    });
    // return a function call of pluck, passing in the filtered array, and the name value, to return just the customer's name
    return _.pluck(friendsWith, 'name');
};



var topThreeTags = function(array) {
    // should look at all the 'tags' values in the customer objects, find and return the three most common
    // create a variable and use map to isolate all of the tags arrays, and combine them into a single array of strings
    var allTags = _.map(array, customerObj => {
        return customerObj['tags'];
    }).join(',').split(',');
    // use reduce with an empty object as the seed, and fill it with key/value pairs where each key is one of the tags and each
    // value is the number of times that particular tag appears in the allTags array
    var tagCountObj = _.reduce(allTags, (tagObj, tag) => {
        tagObj[tag] ? tagObj[tag]++ : tagObj[tag] = 1;
        return tagObj;
    }, {});
    // then convert the object of tags and counts to an array of arrays
    // each key/value pair will be in its own subarray, within an outer array
    // then sort the array of arrays in descending order of the second item in each subarray, which is the tag's count
    var tagCountObjSort = Object.entries(tagCountObj).sort(([, a], [, b]) => b - a);
    // use the slice method to take the first three subarrays, which will be the three most frequent ones
    var top3 = tagCountObjSort.slice(0, 3);
    // use map to take the first element in the top3 subarrays
    var top3Combined = _.map(top3, tagArr => {
        return tagArr[0];
    });
    // return the mapped array
    return top3Combined;
};



var genderCount = function(array) {
    // should go through the customer object array, look for the gender key/value, and tally up the number of times each gender value appears
    // then it should put this could in an object, and return it
    // create a variables to hold the male count
    // use reduce to iterate through each customer object's gender key and add 1 to the accumulator whenever the gender's value is 'male'
    // start with a seed of 0 since ultimately a number should be returned from this reduce statement
    var males = _.reduce(array, (acc, customerObj) => {
        return customerObj.gender === 'male' ? acc += 1 : acc;
    }, 0);
    // do the same thing for the female gender values using reduce
    var females = _.reduce(array, (acc, customerObj) => {
        return customerObj.gender === 'female' ? acc += 1 : acc;
    }, 0);
    // do the same thing for the 'non-binary' gender values using reduce
    var neither = _.reduce(array, (acc, customerObj) => {
        return customerObj.gender === 'non-binary' ? acc += 1 : acc;
    }, 0);
    // create a variable for the final result
    // this will be an object with the keys 'female', 'male', and 'non-binary'
    // the value of each key should be the variable representing each reduce function call
    var result = { female: females, male: males, 'non-binary': neither };
    // return the final result object
    return result;
};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
