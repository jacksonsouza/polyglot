"use strict";

var _ = require("lodash"),
    Promise = require("bluebird");

/* Enable to supress logs */
var console = {}
console.log = function(){}

//Find the smallest from i, end iteration with swap.
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

//Recursively (top-down) split and merge back up (implicit sorting)
//@params lo = beginning index of array, mid...
exports.mergeSort = function(input) {
  function sort(arr, lo, hi) {
    if(hi <= lo) return
    var mid = Math.floor(lo + (hi - lo) / 2)
    sort(arr, lo, mid) //Split first half
    sort(arr, mid + 1, hi) //Split second half
    merge(arr, lo, mid, hi)
  }

  //In-place merge
  function merge(arr, lo, mid, hi) {
    var aux = _.clone(arr)
    var i = lo, //lo of first array
        j = mid + 1; //lo of second array

    console.log("Merging chunks...\n", lo + " to " + mid,arr.slice(lo, mid), "\n" + mid + " to " + hi, arr.slice(mid, hi))

    for(var k = lo; k <= hi; k++) {
      if(i > mid) {
        arr[k] = aux[j++]

      } else if(j > hi) {
        arr[k] = aux[i++]

      } else if(aux[j] < aux[i]) {
        arr[k] = aux[j++]

      } else {
        arr[k] = aux[i++]
      }
    }
  }

  sort(input, 0, input.length - 1)
  return Promise.resolve(input)
}

//Recursively partition the array around a pivot element, then cobble back together.
exports.quickSort = function(input) {

  function sort(arr, lo, hi) {
    if(hi <= lo) return
    var j = partition(arr, lo, hi)
    sort(arr, lo, j-1)
    sort(arr, j+1, hi)
  }

  function partition(arr, lo, hi) {
    var i = lo,
        j = hi + 1;

    while(true) {
      //Find left item to swap
      while(arr[++i] < arr[lo]) { if(i == hi) { break } }

      //Find right item to swap
      while(arr[lo] < arr[--j]) { if(j == lo) { break } }

      //Is this the final swap? (Are pointers crossing)
      if(i >= j) { break }

      //Swap items if pointers have not crossed
      console.log("Swapping " + arr[i] + " and " + arr[j], "for partition ", arr)
      var swap = _.clone(arr[i])
      arr[i] = _.clone(arr[j])
      arr[j] = swap
    }

    //Swap paritioning element (pivot) into correct space
    var swap = _.clone(arr[lo])
    arr[lo] = _.clone(arr[j])
    arr[j] = swap

    console.log("Paritioning finished with ", arr)
    return j;
  }

  sort(input, 0, input.length - 1)
  return Promise.resolve(input)
}

/*
* Knuth Shuffle
* Rearranges an array of objects in uniformly random order
* (under the assumption that Math.random() generates independent
* and uniformly distributed numbers between 0 and 1).
*/
exports.shuffle = function(a) {
  var N = a.length;
  for (var i = 0; i < N; i++) {
    // choose index uniformly in [i, N-1]
    var r = i + Math.floor((Math.random() * (N - i)));
    var swap = _.clone(a[r]);
    a[r] = _.clone(a[i]);
    a[i] = swap;
  }

  return Promise.resolve(a)
}









