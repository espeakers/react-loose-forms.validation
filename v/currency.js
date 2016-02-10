module.exports = function(value){
  var validAmount = /^ *\-? *[$]? *\-? *[0-9,]*[.]?[0-9]?[0-9]? *$/i;
  return (validAmount.test(value) && (value.toString().trim().length > 0) && value.toString().trim() !== '.') || "Enter a dollar amount";
};
