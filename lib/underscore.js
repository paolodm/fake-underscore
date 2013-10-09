var underscore = {
  flatten: function(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
      if (!array[i].hasOwnProperty('length')) {
        result.push(array[i]);
      }
      else {
        result = result.concat(this.flatten(array[i]));
      }
    }

    return result;
  },
  partial: function(fn, args) {
    return function(otherArgs) {
      return fn();
    };
  }
};

module.exports = underscore;