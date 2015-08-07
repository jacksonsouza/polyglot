// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n).
// The function should alphabetize the list based on the nth letter of each word.

// Output:
// function sortIt('bid, zag', 2) //=> 'zag, bid'

function sortIt (a, x) {

	var list = a.split(",")

	for (var i=0; i < list.length; i++) {
		list[i] = list[i].trim()
	}

	list.sort(function(a, b){
		var nameA=a.charAt(x).toLowerCase(), 
			nameB=b.charAt(x).toLowerCase()

		if (nameA < nameB) //sort string ascending
			return -1 
		if (nameA > nameB)
			return 1

		return 0
	})

	return list
}

module.exports.sortIt = sortIt;