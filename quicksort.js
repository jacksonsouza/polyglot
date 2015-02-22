var input = [6,5,7,4,2,1,6,1,4,6]

function quicksort (a) {
	var pivot = a[a.length-1],
		subR = [],
		subL = [];

	if (a.length === 0) {
		return a
	}

	for(i=1; i < a.length; i++) {
		if (pivot <= a[i]) {
			subR.push(a[i])
		} else {
			subL.push(a[i])
		}
	}

	return quicksort(subL).concat(pivot, quicksort(subR))

}

console.log(quicksort(input))