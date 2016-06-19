"use strict";

var _ = require("lodash"),
    Promise = require("bluebird");

/* Enable to supress logs */
//var console = {}
//console.log = function(){}

//Find the smallest from i, swap, move i forward.
exports.selectionSort = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    var min = i;

    console.log("Beginning iteration " + i + "...", arr)

    for(var j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        console.log("New minimum! " + arr[j])
        min = j
      }
    }

    if (i != min) {
      console.log("Ending with swap: " + arr[i] + " with " + arr[min])
      var swap = _.clone(arr[i])
      arr[i] = _.clone(arr[min])
      arr[min] = swap
    }

  }
  return Promise.resolve(arr);
}


//Swap i with each item to the left that is greater (cascade back).
exports.insertionSort = function(arr) {
  for(var i = 1; i < arr.length; i++) {
    var j = i;

    console.log("Beginning iteration " + (i-1) + "... ", arr)

    while(arr[j-1] > arr[j]) {
      console.log("Swapping " + arr[j] + " with " + arr[j-1])
      var swap = _.clone(arr[j])
      arr[j] = _.clone(arr[j-1])
      arr[j-1] = swap
      j--;
    }
  }
  return Promise.resolve(arr)
}

















