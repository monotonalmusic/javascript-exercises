const add = function(x, y) {
	let sum = Number(x) + Number(y)
  return sum
};

const subtract = function(x, y) {
	let sum = Number(x) - Number(y)
  return sum
};

const sum = function(array) {
 let total = array.reduce ((currentTotal, item) => {
    return currentTotal + item
  }, 0)
  return total
};

const multiply = function(array) {
  let total = array.reduce ((currentTotal, item) => {
    return currentTotal * item
  })
  return total
};

const power = function(x, y) {
	let total = Math.pow(x, y)
  return total
};

const factorial = function(num) {
	if (num === 0) {
    return 1
  }
  else {
    return num * factorial(num - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
