const convertToCelsius = function() {
  let far = arguments[0];
  let result = (far - 32) * 5/9;
  return Number(result.toFixed(1));

};

const convertToFahrenheit = function() {
  let cel = arguments[0];
  let result = cel*(9/5) + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
