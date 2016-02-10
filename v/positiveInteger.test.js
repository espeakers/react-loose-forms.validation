var _ = require('lodash');
var test = require('tape');
var v = require('./positiveInteger');

test('positiveInteger', function(t){
  t.equals(v("1"), true);
  t.equals(v("  1 "), true);
  t.equals(v("876"), true);

  t.ok(_.isString(v("-1")));
  t.ok(_.isString(v("")));
  t.ok(_.isString(v("123-123-1234")));
  t.end();
});
