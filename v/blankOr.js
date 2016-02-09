var isBlank = require("../utils/isBlank");

module.exports = function(otherValidator){
  return function(value){
    return isBlank(value) || otherValidator(value);
  };
};
