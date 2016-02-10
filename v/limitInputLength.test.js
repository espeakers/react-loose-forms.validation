var _ = require('lodash');
var test = require('tape');
var limitInputLength = require('./limitInputLength');

test('limitInputLength', function(t){
	var v4 = limitInputLength(4);

  t.equals(v4(" 10 "), true);
  t.equals(v4("abcd"), true);
  t.equals(v4(""), true);
  t.equals(v4("\n"), true);

  t.ok(_.isString(v4("        ")));
  t.ok(_.isString(v4("abcde")));
  t.end();
});
