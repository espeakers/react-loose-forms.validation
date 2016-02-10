var _ = require('lodash');
var test = require('tape');
var dateVal = require('./date');

test('date', function(t){
    t.equals(dateVal("2015-01-01"), true);
    t.equals(dateVal("Aug 9, 1995"), true);
    t.equals(dateVal("Wed, 09 Aug 1995 00:00:00 GMT"), true);
    t.equals(dateVal("10 06 2014"), true);

    t.ok(_.isString(dateVal("notadate")));
    t.ok(_.isString(dateVal("2015-31-31")));
    t.ok(_.isString(dateVal("August 4th 2015")));
    t.ok(_.isString(dateVal("")));
    t.end();
});
