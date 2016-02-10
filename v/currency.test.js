var _ = require('lodash');
var test = require('tape');
var currency = require('./currency');

test('currency', function(t){
  t.equals(currency("10.10"), true);
  t.equals(currency(".25"), true);
  t.equals(currency(".25"), true);
  t.equals(currency("25"), true);
  t.equals(currency("0"), true);
  t.equals(currency("0.00"), true);
  t.equals(currency("-10,100,200.12"), true);

  t.ok(_.isString(currency("1.100")));
  t.ok(_.isString(currency("1blah")));
  t.ok(_.isString(currency("")));
  t.ok(_.isString(currency(".")));
  t.end();
});
