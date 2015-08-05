// Given an array of characters, one element occurs odd 
// number of times and all others have even 
// occurrences. Find the single element with odd occurrences. 

var input = ["d", "a", "a", "b", "c", "c", "b", "b", "d", "d", "d"]
//should return b

function oddOcc(a){
	var arr = a.sort(),
		count = 0;
		save = a[0];

	console.log(arr)

	for (i=0; i<arr.length; i++) {
		var item = arr[i];

		if(save.localeCompare(item) == 0){
			count++;
		} else {
			if (count % 2 != 0) {
				return save;
			}
			count = 1;
			save = item;

		}
	}
}

function edOccur(a) {
	var keys = {}

	for(var i=0; i<a.length; i++) {
		keys[a[i]] = (keys[a[i]] || 0) + 1
	}

	for (var key in keys) {
		if (keys[key] % 2 === 1) {
			return key
		}
	}
}


function edOccurOP(a) {
	var keys = {}
	var result;
	for(var i=0; i<a.length; i++) {
		keys[a[i]] = (keys[a[i]] || 0) + 1
		if (keys[key] % 2 === 1) {
			result = key
		}
	}
	return result;
}

//console.log(oddOcc(input));
console.log(edOccur(input));