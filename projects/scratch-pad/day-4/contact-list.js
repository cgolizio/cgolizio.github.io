// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // create a new object to be returned //
    var contactObj = {};
    // populate the object with the keys being named the same thing as the functions parameters, and the values being equal to the appropriate inputs //
    contactObj.id = id;
    contactObj.nameFirst = nameFirst;
    contactObj.nameLast = nameLast;
    // return the contactObj //
    return contactObj;
    /*
    THIS ALSO WORKS
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    */

}


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];

    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            // push the new contact into the contacts array //
            return contacts.push(contact);
        },
        findContact: function(fullName) {
            // split the fullName into a first name and a last name contained inside an array //
            let nameArr = fullName.split(' ');
            // loop through the contacts array of objects //
            for (let i = 0; i < contacts.length; i++) {
                // if the first item in the full name array matches any of the nameFirst values inside the contacts array's objects //
                // and the second item in the full name array matches any of the nameLast values inside the contacts array's objects, then return the full contact object that it matches //
                if (nameArr[0] === contacts[i].nameFirst && nameArr[1] === contacts[i].nameLast) {
                    return contacts[i];
                }
                else {
                    // if none match, return undefined //
                    return undefined;
                }
            }
        },
        removeContact: function(contact) {
            // create a new variable set to the value of the index of the specific contact object inside the array of objects //
            var i = contacts.indexOf(contact);
            // splice the contacts array using the newly created index variable, and only delete 1 item //
            return contacts.splice(i, 1);
        },
        printAllContactNames: function() {
            // create a new array to house all of the full names //
            var allFullNames = []
            // loop through the contacts array //
            for (let i = 0; i < contacts.length; i++) {
                // create a full name variable which combines the first and last name from each of the contacts array's objects //
                var full = `${contacts[i].nameFirst} ${contacts[i].nameLast}`
                // push the full names into the new full names array //
                allFullNames.push(full);
            }
            // join the all full names array together with a new line //
            return allFullNames.join("\n")
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
