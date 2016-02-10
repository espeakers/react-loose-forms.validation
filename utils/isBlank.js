var _ = require('lodash');
module.exports = function(str){
  return _.isEmpty(str) || !_.isString(str) || str.trim().length === 0;
};
