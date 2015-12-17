`
===Anagrams===
Given an array of strings, check if the strings are anagrams or not.
Two strings are anagrams if they are written using the same exact letters, ignoring space, punctuation and capitalization. 
Each letter should have the same count in both strings. 
For example, ‘Dog & god’ and ‘Star & tsar’ are anagrams of each other.

Topics: string manipulation, sorting & asymptotic notation of (bubble, quicksort, mergesort), non-standard looping (map, filter, reduce), unit testing (BDD)

Derived from http://www.ardendertat.com/2011/11/17/programming-interview-questions-16-anagram-strings/
`

require("babel-polyfill");

exports.anagram = arr => {
	let result = {};

  let sorted = arr.map(val => {
  	return val.split('').sort().join('');
  })

  for (let i = 0; i < arr.length; i++) {
  	for (let j = 0; j < arr.length; j++) {
  	  let o = arr[i];

  	  if (sorted[i] === sorted[j] && i != j) {
  	  	if(result.hasOwnProperty(o)) {
  	  		result[o].push(arr[j]);
  	  	} else {
  	  		result[o] = [];
  	  		result[o].push(arr[j]);
  	  	}
  	  }
  	}
  }

  return result
}