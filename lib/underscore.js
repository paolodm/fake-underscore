var underscore = {
  flatten: function(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
      if (!array[i].hasOwnProperty('length')) {
        result.push(array[i]);
      }
    }

    return result;
  }
};

module.exports = underscore;