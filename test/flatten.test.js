var _ = require('../lib/underscore.js');
var expect = require('chai').expect;

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


