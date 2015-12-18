`
===Pairsum===
Given an array of ints and a sum (int), return a 2D array all pairs of ints in the array that evaluate to the given sum.

Topics: ES6 array manipulation, non-standard looping (map, filter, reduce), unit testing, test driven development (TDD)

Derived from 
`

require("babel-polyfill");

exports.pairsum = (arr, sum) => {
	let result = [];	

	arr.sort().map((v, i) => {
		for(let j = i; j < arr.length; j++) {
			if (v + arr[j] === sum)
				result.push([v, arr[j]])
		}
	})

	return result
}