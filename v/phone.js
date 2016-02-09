var _ = require("lodash");

module.exports = function(value){
  return (_.isString(value) && (value.replace(/\D+/g, '').length > 9)) || "Enter a phone number";
};
