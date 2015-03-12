// Problem Statement:
// Given a randomly generated pyramid of number-strings 1 to 99 (inclusive)
// find the path from top to bottom that results in the smallest sum. 
// Least sum has priority over least values in path at level.


function smallestPath(arr) {

	isValidTriangle(arr);

	//begin edge cases
	if(arr.length < 1) {
		throw "Input pyramid is empty."
	} else if (arr.length < 2) {
		return {"sum": arr[0][0], "path" : arr[0][0]};
	}

	//deep cloning arr into pyramid for mutable summing
	var pyramid = arr.map(function(a) {
    	return a.slice();
	});

	var pyramidLevels = pyramid.length - 1,
		pathIndexes = [], //a triangle with one less level that tracks summing path indexes
		sum = 0;

	//traversing pyramid backwards by level (left to right by value), skip last level
	for(i = pyramidLevels - 1; i >= 0; i--){ 
		var level = pyramid[i],
			prevLevel = pyramid[i + 1],
			subPath = [];

		for(j = 0; j <= i; j++) {
			var value = parseInt(level[j]),
		    	left = parseInt(prevLevel[j]),
				right = parseInt(prevLevel[j + 1]);

			//consider left and right children
			//then, choose least & push indexes of current least sum to subPath
			if (left < right) {
				subPath.push(j) 
				pyramid[i][j] = value + left; //summing least values up the tree

			} else {
				subPath.push(j + 1)
				pyramid[i][j] = value + right;

			}
		}

		pathIndexes.push(subPath);
	}

	pathIndexes.reverse();

	var finalPath = [parseInt(arr[0][0])],
		leadsTo = pathIndexes[0][0];

	//iterating level by level swapping path indexes for initial values
	for (i = 1; i <= pathIndexes.length; i++) { 
		finalPath.push(parseInt(arr[i][leadsTo]))

		if(i != pathIndexes.length) {
			leadsTo = pathIndexes[i][leadsTo]
		}
	}

	return {"sum": pyramid[0][0], "path" : finalPath};
}


function isValidTriangle (a) {
	var arr = a;

	var prevLength = 0;
	arr.forEach(function(level){
		if (level.length != prevLength + 1) {
			throw "This is not a triangle. Each level's length must increase by 1"
		}

		level.forEach(function(value){
			var intVal = parseInt(value);

			if (isNaN(intVal) || typeof value != 'string'){
				throw "Value " + value + " is not a integer-string"
			} else if (intVal < 1 || intVal > 99) {
				throw "Value " + intVal + " is under 1 or over 99"
			} 
		});

		prevLength = level.length;
	});
}












//Testing: generation of random pyramid, testing given cases, main function call.

var pyramid = [],
	pyramidLevels = 5;

for (i = 1; i <= pyramidLevels; i++) { //populating random pyramid for testing
	var level = [];

	while (level.length < i) {
		level.push((Math.floor(Math.random() * (99)) + 1).toString());
	}

	pyramid.push(level);
}

var givenOne = [
           ["17"],
       ["51", "29"],
    ["13", "11", "70"],
 ["30", "31", "77", "45"]
];


var givenTwo = [
           ["10"],
       ["20", "50"],
    ["99", "98", "12"],
 ["85", "88", "22", "07"]
];

var badtestOne = [
           ["10"],
       ["-20", "50"],
    ["99", "98", "12"],
 ["85", "808", "22", "07"]
];

var badtestTwo = [
           ["10"],
       ["20", "a"],
    ["99", "98", "12"],
 ["85", "88", "22", "07"]
];

var badtestThree = [
       ["20", "50"],
           ["10"],
    ["99", "98", "12"],
 ["85", "88", "22", "07"]
];

console.log(pyramid);
console.log(smallestPath(pyramid));


