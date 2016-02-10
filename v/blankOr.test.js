var _ = require("lodash");
var test = require('tape');
var blankOr = require('./blankOr');
var v = blankOr(require('./percent'));

test('blankOr', function(t){

  t.equals(v(""), true);
  t.equals(v("   "), true);
  t.equals(v(" \n \t\t "), true);
  t.equals(v("100"), true);
  t.equals(v("0"), true);
  t.equals(v("25"), true);
  t.equals(v(" 10 "), true);

  t.ok(_.isString(v(" 0.")));
  t.ok(_.isString(v("101")));
  t.end();
});
