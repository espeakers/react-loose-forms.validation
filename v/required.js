var _ = require("lodash");

module.exports = function(value, field){
  var valid = false;
  if (_.isBoolean(value)){
    valid = value === true;
  }else if (_.isNumber(value)){
    valid = value !== 0;
  }else if (_.isDate(value)){
    valid = true;
  }else{
    valid = !_.isEmpty(value);
  }
  return valid || ((field.label || field.name) + " is required");
};
