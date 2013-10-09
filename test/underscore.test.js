var _ = require('../lib/underscore.js');
var expect = require('chai').expect;

describe('underscore', function() {
  describe('flatten', function() {
    it('should return an empty array as itself', function() {
      expect(_.flatten([])).to.eql([]);
    });
  });
});
