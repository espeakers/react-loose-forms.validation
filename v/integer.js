module.exports = function(value){
  return /^\s*[-+]?[0-9]+\s*$/.test(value) || "Enter a number";
};
