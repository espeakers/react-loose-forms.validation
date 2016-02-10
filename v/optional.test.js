var test = require('tape');
var optional = require('./optional');

test('optional', function(t){
  t.equals(optional(), true);
  t.end();
});
