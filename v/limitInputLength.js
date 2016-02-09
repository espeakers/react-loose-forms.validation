var isBlank = require("../utils/isBlank");

module.exports = function(length){
  return function(value){
    return isBlank(value) || (value.length <= length) || ("This field must be less than " + length + " characters");
  };
};
