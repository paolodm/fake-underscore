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
    var result = _.map([1, 2, 3], function(letter) { return letter + 3; });
    expect(result).to.eql([4, 5, 6]);
  });

  it('should return [3, 6, 9] for _.map([1, 2, 3], function(num) { return num * 3; })', function() {
     var result = _.map([1, 2, 3], function(num) { return num * 3; });
    expect(result).to.eql([3, 6, 9]);
  });

  it("should return [3, 6, 9] for _.map({'one' : 1, 'two' : 1, 'three' : 1 }, " +
    "function(num) { return num * 3; })", function() {
    var result = _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
  });

  it("should return just the names of an array of people objects", function() {
    var stooges = [
      { 'name': 'moe', 'age': 40 },
      { 'name': 'larry', 'age': 50 }
    ];

    var result = _.map(stooges, 'name');

    expect(result).to.eql(['moe', 'larry']);
  });
});