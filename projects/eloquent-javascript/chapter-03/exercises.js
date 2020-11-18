////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  // return the lowest of the two passed in numbers
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// should accept a positive whole number and return a boolean
// should return true if the number is even and false if it is odd
function isEven(num) {
  if (num === 0) {
    return true;
  }
  else if (num === 1 || num < 0) {
    return false;
  }
  else {
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// should take a string and a letter
// check how many times the letter is in the string
// return the number
function countChars(string, char) {
  var counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter += 1;
    }
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// should take a string
// check how many uppercase B's are in the string
// return the number
function countBs(string) {
  var counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      counter += 1;
    }
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
