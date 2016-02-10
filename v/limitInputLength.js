var _ = require('lodash');

module.exports = function(length){
  return function(value){
    return (_.isString(value) && (value.length <= length)) || ("This field must be less than " + length + " characters");
  };
};
