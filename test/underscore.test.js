var _ = require('../lib/underscore.js');
var expect = require('chai').expect;

describe('underscore', function() {
  describe('flatten', function() {
    it('should return an empty array as itself', function() {
      expect(_.flatten([])).to.eql([]);
    });

    it('should return the list as itself if it is already a flat list', function() {
      expect(_.flatten([1, 2, 3])).to.eql([1, 2, 3]);
    });
  });
});
