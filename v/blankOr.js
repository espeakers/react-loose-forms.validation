var isBlank = require("../utils/isBlank");

/**
 * Return true if the value is blank, otherwise require the validation function you pass in as the frist argument.
 *
 * For example:
 * ```js
 *   {
 *     label: "Enter your email address",
 *     ...
 *     validate: v.blankOr(v.email)
 *   }
 * ```
 */
module.exports = function(otherValidator){
  return function(value){
    return isBlank(value) || otherValidator(value);
  };
};
