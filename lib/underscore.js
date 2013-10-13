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
  partial: function(fn) {
    // Need to remove the first argument; this is fn
    var initialArgs = [].slice.call(arguments, 1);
    return function() {
      var otherArgs = [].slice.call(arguments, 0);
      var allArgs = initialArgs.concat(otherArgs);
      return fn.apply(null, allArgs);
    };
  },
  map: function(collection, fn) {
    var mapped = [];
    var collectionType = typeof collection;

    if (collectionType === 'string') {
      collection.split('').forEach(function(c) {
        mapped.push(fn(c));
      });
    }
    else if (collection != null) {
      for (var key in Object.keys(collection)) {
        if (typeof fn === 'function') {
          mapped[key] = fn(collection[key]);
        }
        else if (typeof fn === 'string') {
          mapped[key] = collection[key][fn];
        }
        else if (fn == null) {
          mapped.push(collection[key]);
        }
      }
    }
    return mapped;
  }
};

module.exports = underscore;