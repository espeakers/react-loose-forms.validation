var _ = require("lodash");
var test = require('tape');
var percent = require('./percent');

test('percent', function(t){
  t.equals(percent("100"), true);
  t.equals(percent("0"), true);
  t.equals(percent(" 10 "), true);

  t.ok(_.isString(percent(".1")));
  t.ok(_.isString(percent("101")));
  t.ok(_.isString(percent("-1")));
  t.ok(_.isString(percent("blah")));
  t.ok(_.isString(percent("-123")));
  t.ok(_.isString(percent("123-1234")));
  t.end();
});
