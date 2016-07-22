var sort = require("../sort"),
	  _ = require("lodash"),
	  Promise = require("bluebird"),
    expect = require("chai").expect;

var unsortedArray = _.unique(Array.apply(0, Array(20)).map(function(n){ return Math.ceil(Math.random() * 20) }))

var sortedBySystem = _.clone(unsortedArray).sort(function(a,b){ return a - b });

describe("Selection Sort", function(){
  it("should sort all items in the array with n^2 runtime", function(){
    var arr = _.clone(unsortedArray)
    sort.selectionSort(arr)
      .then(function(sorted) {
        expect(sorted).to.eql(sortedBySystem)
      })
 })
})

describe("Insertion Sort", function(){
  it("should construct a binary search tree from a random array of ints", function(){
    var arr = _.clone(unsortedArray)
    sort.insertionSort(arr)
      .then(function(sorted) {
        expect(sorted).to.eql(sortedBySystem)
      })
  })
})

describe("Merge Sort", function(){
  it("should construct a binary search tree from a random array of ints", function(){
    var arr = _.clone(unsortedArray)
    sort.mergeSort(arr)
      .then(function(sorted) {
        expect(sorted).to.eql(sortedBySystem)
      })
  })
})

describe("Quick Sort", function(){
  it("should construct a binary search tree from a random array of ints", function(){
    var arr = _.clone(unsortedArray)
    sort.quickSort(arr)
      .then(function(sorted) {
        expect(sorted).to.eql(sortedBySystem)
      })

  })
})

describe("Knuth Shuffle", function(){
  it("should construct a binary search tree from a random array of ints", function(){
    var arr = _.clone(unsortedArray)
    sort.shuffle(arr)
      .then(function(shuffled) {
        console.log(unsortedArray)
        console.log(shuffled)
      })
  })
})



