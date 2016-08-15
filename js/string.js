var _ = require("lodash"),
    Promise = require("bluebird");

exports.anagrams = function(list) {
  var result = {},
      sortedList = _.clone(list).map(function(n){
        return n.split("").sort().join("");
      }); //Sorts strings in place

  for(var i = 0; i < list.length; i++) {
    if(!_.has(result, list[i])) result[list[i]] = []; //Instantiates result object with anagram lists

    for(var j = 0; j < list.length; j++) {
      if(sortedList[i] == sortedList[j] && i != j) result[list[i]].push(list[j]);
      //Checks the entire array against anagrams using the sorted list, appends to list.
      /*n^2 complexity could be avoided by just using a map for the sortedList & checking to see if the values exsist*/
    }
  }

  return Promise.resolve(result);
}


