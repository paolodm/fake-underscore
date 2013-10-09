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

    it('should flatten a list that contains one flat list', function() {
      expect(_.flatten([1, 2, [3, 4]])).to.eql([1, 2, 3, 4]);
    });

    it('should flatten a list that contained a hierarchy of lists', function() {
      expect(_.flatten([1, [2, [3, [4, 5, 6, 7]]], 8, 9])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('partial', function() {
    it('should return the value of the function if it doesn\'t take arguments', function() {
      var fn = function() { return 1; };
      var partialFn = _.partial(fn);
      expect(partialFn()).to.eql(1);
    });

    it('should return 1', function() {
      var fn = function(arg1) { return arg1; };
      var partialFn = _.partial(fn);

      expect(partialFn(1)).to.eql(1);
    });
  });
});
