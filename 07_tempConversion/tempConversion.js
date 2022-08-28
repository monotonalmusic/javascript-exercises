const ftoc = function(f) {
  let cResult = (f - 32) * (5 / 9)
  let roundedC = cResult.toFixed(1);
  return parseFloat(roundedC) 
};

const ctof = function(c) {
  let fResult = c * (9/5) + 32
  let roundedF = fResult.toFixed(1);
  return parseFloat(roundedF)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
