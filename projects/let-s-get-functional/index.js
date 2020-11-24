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
    let maleCustomers = _.filter(array, function(customerObj) {
        return customerObj.gender === "male";
    }).length;
    return maleCustomers;
};



var femaleCount = function(array) {
    let femaleCustomers = _.filter(array, function(customerObj) {
        return customerObj.gender === "female";
    }).length;
    return femaleCustomers;
};



var oldestCustomer = function(array) {
    var ages = _.map(array, function(customerObj) {
        return customerObj.age;
    }).sort((a, b) => b - a);
    var oldest = _.filter(array, function(customerObj) {
        return customerObj.age === ages[0];
    }).pop();
    return oldest['name'];
};



var youngestCustomer = function(array) {
    var ages = _.map(array, function(customerObj) {
        return customerObj.age;
    }).sort((a, b) => a - b);
    var youngest = _.filter(array, function(customerObj) {
        return customerObj.age === ages[0];
    }).pop();
    return youngest['name'];
};



var averageBalance = function(array) {
    // MY MORE CONCISE SOLUTION: //
    var balanceArr = _.map(array, (customerObj) => Number(customerObj.balance.slice(1).replace(',', '')));
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
    letter = letter.toUpperCase();
    var nameArr = _.map(array, (customerObj) => customerObj.name);
    var nameWithLetterArr = _.filter(nameArr, (name) => name[0] === letter);
    return nameWithLetterArr.length;
};



var friendFirstLetterCount = function(array, customer, letter) {
    letter = letter.toUpperCase();
    let specificCustomer = _.filter(array, (customerObj) => customerObj.name === customer);
    for (let i = 0; i < specificCustomer.length; i++) {
        var specificCustomerObjs = specificCustomer[i].friends;
    }
    let friendNames = _.map(specificCustomerObjs, (friends) => friends.name);
    return _.filter(friendNames, (name) => name[0] === letter).length;
};



var friendsCount = function(array, name) {
    var customerArr = [];
    var customerNameAndFriends = _.map(array, customerObj => [customerObj.name, ...customerObj.friends]);
    var customerObjectWithFriend = _.filter(customerNameAndFriends, customerAndFriends => {
        for (let i = 0; i < customerAndFriends.length; i++) {
            customerArr = customerAndFriends[i].name;
        }
        return customerArr === name;
    });
    return _.map(customerObjectWithFriend, custArr => custArr[0])
};



var topThreeTags = function(array) {

};



var genderCount = function(array) {

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
