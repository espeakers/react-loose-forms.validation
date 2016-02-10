var _ = require('lodash');
var test = require('tape');
var phone = require('./phone');

test('phone', function(t){
  t.equals(phone("123-123-1234"), true);
  t.equals(phone("(123) 123-1234"), true);
  t.equals(phone("(123)123-1234"), true);
  t.equals(phone("+1 123 123-1234"), true);
  t.equals(phone("3213214321"), true);

  t.ok(_.isString(phone("blah")));
  t.ok(_.isString(phone("123")));
  t.ok(_.isString(phone("123-1234")));
  t.end();
});
