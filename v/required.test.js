var _ = require("lodash");
var test = require('tape');
var v = require('./required');

test('required', function(t){
  t.equals(v(true), true);
  t.equals(v(100), true);
  t.equals(v(-100), true);
  t.equals(v(.123), true);
  t.equals(v(new Date()), true);
  t.equals(v([1, 2]), true);
  t.equals(v(["blah"]), true);

  var notValid = function(value){
    t.equals(v(value, {name: "Field-NamE"}), "Field-NamE is required");
  };
  notValid(false);
  notValid(0);
  notValid("");
  notValid([]);
  notValid({});
  t.end();
});
