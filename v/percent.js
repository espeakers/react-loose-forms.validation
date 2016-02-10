var _ = require("lodash");

module.exports = function(value){
  var n = _.parseInt(value, 10);
  return (/^\s*[0-9]+\s*$/.test(value) && (n >= 0) && (n <= 100)) || "Enter a whole number between 0 and 100";
};
