var _ = require('../lib/underscore.js');
var expect = require('chai').expect;

describe('map', function() {
  it('should return [] in _.map([])', function() {
    expect(_.map([])).to.eql([]);
  });

  it('should return all 1s when given a function that returns 1', function() {
    expect(_.map(['a', 'b', 'c'], function() { return 1; })).to.eql([1, 1, 1]);
  });

  it("should return [4, 5, 6] for _.map([1, 2, 3], function(letter) { return letter + 3; })", function() {
     expect(_.map([1, 2, 3], function(letter) { return letter + 3; })).to.eql([4, 5, 6]);
  });
});