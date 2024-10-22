const add = function() {
return arguments[0]	+ arguments[1];
};

const subtract = function() {
	
return arguments[0]	- arguments[1];
};

const sum = function() {
let sum = 0;
  for(num of arguments[0]){
    sum += num;
  }
  return sum;
};

const multiply = function() {
let sum = 1;
  for(num of arguments[0]){
    sum = sum * num ;
  }
  return sum;

};

const power = function() {
return arguments[0]	** arguments[1];
	
};

const factorial = function() {
  if(arguments[0] === 0) return 1;
  let fact = 1;
  for(let i = arguments[0]; i >=1; i--){
    fact = fact * i;
  }
  return fact;
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
