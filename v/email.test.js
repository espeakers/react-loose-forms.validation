var _ = require("lodash");
var test = require('tape');
var v = require('./email');

test('email', function(t){
  t.equals(v("one@two.com"), true);
  t.equals(v("o@t.com"), true);

  t.ok(_.isString(v("")));
  t.ok(_.isString(v(".1")));
  t.ok(_.isString(v(null)));
  t.ok(_.isString(v(false)));
  t.ok(_.isString(v("asdf @blah.com")));
  t.ok(_.isString(v("a@.")));
  t.ok(_.isString(v("one@gmail.")));
  t.end();
});
