var _ = require("lodash");
var test = require('tape');
var v = require('./integer');

test('integer', function(t){

  t.equals(v("1"), true);
  t.equals(v("  -123121  "), true);
  t.equals(v("+10"), true);
  t.equals(v("-10"), true);
  t.equals(v("0"), true);

  t.ok(_.isString(v(".1")));
  t.ok(_.isString(v("10.12")));
  t.ok(_.isString(v(".")));
  t.ok(_.isString(v("")));
  t.end();
});
