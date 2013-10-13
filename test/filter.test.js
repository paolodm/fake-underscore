var _ = require('../lib/underscore.js');
var expect = require('chai').expect;

describe('filter', function() {
  describe('callback function returns true for even numbers', function() {
    it('should return [2, 4] for input [1, 2, 3, 4]', function() {
      var filtered = _.filter([1, 2, 3, 4], function(el) { return el % 2 == 0; });
      expect(filtered).to.eql([2, 4]);
    });
  });
});