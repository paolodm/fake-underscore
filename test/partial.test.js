var _ = require('../lib/underscore.js');
var expect = require('chai').expect;

describe('partial', function() {
  it('should get the return value of 1 when function is applied with no arguments', function() {
    var fn = function() { return 1; };
    var partialFn = _.partial(fn);
    expect(partialFn()).to.eql(1);
  });

  it('should return value based on what was passed in', function() {
    var fn = function(arg1) { return arg1; };
    var partialFn = _.partial(fn);

    expect(partialFn(1)).to.eql(1);
  });
});
